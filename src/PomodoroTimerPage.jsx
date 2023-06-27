import React, { useState, useEffect } from 'react';
import './PomodoroTimerPage.css';
import Header from './Header';

function PomodoroTimer() {
  const [focusTime, setFocusTime] = useState(25);
  const [timeLeft, setTimeLeft] = useState(focusTime * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimeLeft(focusTime * 60);
      setIsRunning(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, timeLeft, focusTime]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(focusTime * 60);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleFocusTimeChange = (e) => {
    const newFocusTime = parseInt(e.target.value, 10);
    setFocusTime(newFocusTime);
    setTimeLeft(newFocusTime * 60);
  };

  return (
    <div>
    <Header />
    <div className="PomodoroTimerPage">
      <h2>Pomodoro Timer</h2>
      <div className="timer-container">
        <div className="timer">{formatTime(timeLeft)}</div>
      </div>
      <div className="buttons-container">
        {isRunning ? (
          <button className="button-pause" onClick={pauseTimer}>Pause</button>
        ) : (
          <button className="button-start" onClick={startTimer}>Start</button>
        )}
        <button className="button-reset" onClick={resetTimer}>Reset</button>
      </div>
      <div className="focus-time-container">
        <label htmlFor="focus-time">Focus Time (minutes):</label>
        <input
          type="number"
          id="focus-time"
          value={focusTime}
          onChange={handleFocusTimeChange}
        />
      </div>
    </div>
    </div>
  );
}

export default PomodoroTimer;
