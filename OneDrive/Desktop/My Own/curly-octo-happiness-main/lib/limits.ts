// Simple localStorage-based daily limit tracking
// Note: This is client-side only and resets when localStorage is cleared

const DAILY_LIMIT = 5;
const STORAGE_KEY = 'math_worksheet_usage';

interface UsageData {
  date: string;
  count: number;
}

function getTodayString(): string {
  return new Date().toDateString();
}

function getUsageData(): UsageData {
  if (typeof window === 'undefined') {
    return { date: getTodayString(), count: 0 };
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return { date: getTodayString(), count: 0 };
  }

  try {
    const data = JSON.parse(stored) as UsageData;
    // Reset count if it's a new day
    if (data.date !== getTodayString()) {
      return { date: getTodayString(), count: 0 };
    }
    return data;
  } catch {
    return { date: getTodayString(), count: 0 };
  }
}

function saveUsageData(data: UsageData): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}

export async function checkDailyLimit(): Promise<{ count: number; max: number }> {
  const data = getUsageData();
  return { count: data.count, max: DAILY_LIMIT };
}

export async function incrementDailyUsage(): Promise<{ count: number; max: number }> {
  const data = getUsageData();
  const newCount = Math.min(data.count + 1, DAILY_LIMIT);
  
  const newData: UsageData = {
    date: getTodayString(),
    count: newCount
  };
  
  saveUsageData(newData);
  return { count: newCount, max: DAILY_LIMIT };
}