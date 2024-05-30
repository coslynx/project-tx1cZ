import React, { useState, useEffect } from 'react';
import moment from 'moment';

const PomodoroTimer = () => {
  const [studyTarget, setStudyTarget] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  const handleChangeStudyTarget = (e) => {
    setStudyTarget(e.target.value);
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeRemaining(1500); // Reset timer to 25 minutes
  };

  useEffect(() => {
    let interval;

    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      clearInterval(interval);
      // Display a notification or perform an action when Pomodoro session ends
      alert('Pomodoro session completed! Time for a break.');
    }

    return () => clearInterval(interval);
  }, [isActive, timeRemaining]);

  // Display minutes and seconds in MM:SS format
  const formattedTime = moment.utc(timeRemaining * 1000).format('mm:ss');

  return (
    <div>
      <h2>Pomodoro Timer</h2>
      <p>Study Target: {studyTarget}</p>
      <input type="text" value={studyTarget} onChange={handleChangeStudyTarget} />
      <p>Time Remaining: {formattedTime}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;