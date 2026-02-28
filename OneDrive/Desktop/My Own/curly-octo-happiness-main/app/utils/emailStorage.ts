// app/utils/emailStorage.ts
export interface UserData {
  email: string;
  language: string;
  unitSystem?: string;
  grade?: string;
  timestamp: string;
  segments: string[];
}

export const generateAdminPassword = (): string => {
  if (typeof window === 'undefined') return '';
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  return Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const initAdminPassword = (): string => {
  if (typeof window === 'undefined') return '';
  
  let adminPassword = localStorage.getItem('adminPassword');
  if (!adminPassword) {
    adminPassword = generateAdminPassword();
    localStorage.setItem('adminPassword', adminPassword);
    console.log('Admin password generated. Save this for future access:', adminPassword);
  }
  return adminPassword;
};

export const saveUserData = (userData: Omit<UserData, 'timestamp' | 'segments'>): void => {
  try {
    const segments = generateSegments(userData);
    const existingDataJSON = localStorage.getItem('worksheetUsers');
    const existingData: UserData[] = existingDataJSON ? JSON.parse(existingDataJSON) : [];
    
    const existingUserIndex = existingData.findIndex(user => user.email === userData.email);
    
    if (existingUserIndex !== -1) {
      existingData[existingUserIndex] = {
        ...userData,
        segments,
        timestamp: existingData[existingUserIndex].timestamp
      };
    } else {
      existingData.push({
        ...userData,
        segments,
        timestamp: new Date().toISOString()
      });
    }
    
    localStorage.setItem('worksheetUsers', JSON.stringify(existingData));
    updateSegmentCounts(existingData);
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

const generateSegments = (userData: Omit<UserData, 'timestamp' | 'segments'>): string[] => {
  const segments: string[] = [];
  segments.push(`lang-${userData.language}`);
  
  if (userData.language === 'en' && userData.unitSystem) {
    segments.push(`units-${userData.unitSystem}`);
  }
  
  if (userData.grade) {
    segments.push(`grade-${userData.grade}`);
  } else {
    segments.push('grade-all');
  }
  
  if (userData.grade) {
    segments.push(`${userData.language}-grade-${userData.grade}`);
    if (userData.language === 'en' && userData.unitSystem) {
      segments.push(`en-${userData.unitSystem}-grade-${userData.grade}`);
    }
  }
  
  return segments;
};

const updateSegmentCounts = (users: UserData[]): void => {
  const segmentCounts: Record<string, number> = {};
  users.forEach(user => {
    user.segments.forEach(segment => {
      segmentCounts[segment] = (segmentCounts[segment] || 0) + 1;
    });
  });
  localStorage.setItem('segmentCounts', JSON.stringify(segmentCounts));
};

export const getAllUserData = (): UserData[] => {
  try {
    const dataJSON = localStorage.getItem('worksheetUsers');
    return dataJSON ? JSON.parse(dataJSON) : [];
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return [];
  }
};

export const getSegmentCounts = (): Record<string, number> => {
  try {
    const countsJSON = localStorage.getItem('segmentCounts');
    return countsJSON ? JSON.parse(countsJSON) : {};
  } catch (error) {
    console.error('Error retrieving segment counts:', error);
    return {};
  }
};

export const exportToCSV = (segment?: string): string => {
  let users = getAllUserData();
  if (segment) {
    users = users.filter(user => user.segments.includes(segment));
  }
  if (users.length === 0) return '';
  
  let csv = 'Email,Language,Unit System,Grade,Signup Date,Segments\n';
  users.forEach(user => {
    const row = [
      `"${user.email}"`,
      `"${user.language}"`,
      `"${user.unitSystem || ''}"`,
      `"${user.grade || ''}"`,
      `"${user.timestamp}"`,
      `"${user.segments.join(';')}"`
    ].join(',');
    csv += row + '\n';
  });
  return csv;
};

export const downloadCSV = (segment?: string): void => {
  const csv = exportToCSV(segment);
  if (!csv) {
    alert('No user data to export yet.');
    return;
  }
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const date = new Date().toISOString().split('T')[0];
  const filename = segment 
    ? `worksheet-users-${segment}-${date}.csv` 
    : `worksheet-users-${date}.csv`;
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const verifyPassword = (inputPassword: string): boolean => {
  const storedPassword = localStorage.getItem('adminPassword');
  if (!storedPassword) return false;
  
  const inputBytes = new TextEncoder().encode(inputPassword);
  const storedBytes = new TextEncoder().encode(storedPassword);
  if (inputBytes.length !== storedBytes.length) return false;
  
  let result = 0;
  for (let i = 0; i < inputBytes.length; i++) {
    result |= inputBytes[i] ^ storedBytes[i];
  }
  return result === 0;
};