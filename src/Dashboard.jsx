import React, { useState } from 'react';
import './Dashboard.css';
import Header from './Header';

function Dashboard({ onTaskManagerClick, onPomodoroTimerClick, onCommunityClick }) {
  const [isTaskManagerClicked, setIsTaskManagerClicked] = useState(false);
  const [isPomodoroTimerClicked, setIsPomodoroTimerClicked] = useState(false);
  const [isCommunityClicked, setIsCommunityClicked] = useState(false);

  const handleTaskManagerClick = () => {
    setIsTaskManagerClicked(true);
    onTaskManagerClick();
  };

  const handlePomodoroTimerClick = () => {
    setIsPomodoroTimerClicked(true);
    onPomodoroTimerClick();
  };

  const handleCommunityClick = () => {
    setIsCommunityClicked(true);
    onCommunityClick();
  };

  return (
    <div>
      <Header />
      <div className="Dashboard">
      <div className="dashboard-buttons">
        <button className="dashboard-button" onClick={handleTaskManagerClick} disabled={isTaskManagerClicked}>
          {isTaskManagerClicked ? 'Task Manager (Clicked)' : 'Task Manager'}
        </button>
        <button className="dashboard-button" onClick={handlePomodoroTimerClick} disabled={isPomodoroTimerClicked}>
          {isPomodoroTimerClicked ? 'Pomodoro Timer (Clicked)' : 'Pomodoro Timer'}
        </button>
        <button className="dashboard-button" onClick={handleCommunityClick} disabled={isCommunityClicked}>
          {isCommunityClicked ? 'Community (Clicked)' : 'Community'}
        </button>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
