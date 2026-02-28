// app/components/AdminPanel.tsx
"use client";

import { useState, useEffect } from 'react';
import { 
  getAllUserData, 
  downloadCSV, 
  UserData, 
  getSegmentCounts, 
  verifyPassword,
  initAdminPassword
} from '../utils/emailStorage';

export default function AdminPanel() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [segmentCounts, setSegmentCounts] = useState<Record<string, number>>({});
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(true);

  useEffect(() => {
    initAdminPassword();
    if (isAuthenticated) {
      setUsers(getAllUserData());
      setSegmentCounts(getSegmentCounts());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyPassword(password)) {
      setIsAuthenticated(true);
      setShowPasswordForm(false);
      setPassword('');
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  const handleExport = (segment?: string) => {
    downloadCSV(segment);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getSegmentDisplayName = (segment: string): string => {
    const segmentMap: Record<string, string> = {
      'lang-en': 'English Speakers',
      'lang-fr': 'French Speakers',
      'lang-es': 'Spanish Speakers',
      'lang-de': 'German Speakers',
      'lang-it': 'Italian Speakers',
      'units-us': 'U.S. Units',
      'units-intl': 'Metric Units',
      'grade-all': 'All Grades',
      'grade-1': 'Grade 1',
      'grade-2': 'Grade 2',
      'grade-3': 'Grade 3',
      'grade-4': 'Grade 4',
      'grade-5': 'Grade 5',
      'grade-6': 'Grade 6',
    };
    
    if (segment.includes('-grade-')) {
      const [lang, , grade] = segment.split('-');
      return `${lang.toUpperCase()} Grade ${grade}`;
    }
    
    return segmentMap[segment] || segment;
  };

  if (!isAuthenticated && showPasswordForm) {
    return (
      <div className="admin-login">
        <h2>Admin Access</h2>
        <p className="login-instructions">
          Enter the admin password to access user data.
        </p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>User Management</h2>
        <div className="admin-actions">
          <button onClick={() => handleExport()} className="export-button">
            Export All to CSV
          </button>
          <button 
            onClick={() => setShowPasswordForm(true)} 
            className="logout-button"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="user-stats">
        <p>Total Users: {users.length}</p>
        <p>Segments: {Object.keys(segmentCounts).length}</p>
      </div>

      <div className="segment-section">
        <h3>Export by Segment</h3>
        <div className="segment-grid">
          {Object.entries(segmentCounts)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([segment, count]) => (
              <div key={segment} className="segment-card">
                <div className="segment-info">
                  <h4>{getSegmentDisplayName(segment)}</h4>
                  <p>{count} users</p>
                </div>
                <button 
                  onClick={() => handleExport(segment)}
                  className="segment-export-btn"
                >
                  Export CSV
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="users-table">
        <h3>All Users</h3>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Language</th>
              <th>Unit System</th>
              <th>Grade</th>
              <th>Signup Date</th>
              <th>Segments</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.language}</td>
                <td>{user.unitSystem || '-'}</td>
                <td>{user.grade || '-'}</td>
                <td>{formatDate(user.timestamp)}</td>
                <td>
                  <div className="segments-list">
                    {user.segments.map(segment => (
                      <span key={segment} className="segment-tag">
                        {getSegmentDisplayName(segment)}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {users.length === 0 && (
          <p className="no-data">No user data yet.</p>
        )}
      </div>
    </div>
  );
}