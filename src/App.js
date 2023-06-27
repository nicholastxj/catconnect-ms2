import React, { useState } from 'react';
import './App.css';
import AuthPage from './AuthPage';
import Dashboard from './Dashboard';
import TaskManagerPage from './TaskManagerPage';
import PomodoroTimerPage from './PomodoroTimerPage';
import CommunityPage from './CommunityPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleTaskManagerClick = () => {
    setCurrentPage('taskManager');
  };

  const handlePomodoroTimerClick = () => {
    setCurrentPage('pomodoroTimer');
  };

  const handleCommunityClick = () => {
    setCurrentPage('community');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <Dashboard
            onTaskManagerClick={handleTaskManagerClick}
            onPomodoroTimerClick={handlePomodoroTimerClick}
            onCommunityClick={handleCommunityClick}
          />
        );
      case 'taskManager':
        return <TaskManagerPage />;
      case 'pomodoroTimer':
        return <PomodoroTimerPage />;
      case 'community':
        return <CommunityPage />;
      default:
        return <AuthPage onLogin={handleLogin} />;
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        renderPage()
      ) : (
        <AuthPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
