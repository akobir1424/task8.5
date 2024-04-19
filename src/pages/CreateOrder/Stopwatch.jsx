// Stopwatch.js
import  { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const newTime = { ...prevTime };

          if (newTime.seconds > 0) {
            newTime.seconds--;
          } else {
            if (newTime.minutes > 0) {
              newTime.minutes--;
              newTime.seconds = 59;
            } else {
              if (newTime.hours > 0) {
                newTime.hours--;
                newTime.minutes = 59;
                newTime.seconds = 59;
              } else {
                if (newTime.days > 0) {
                  newTime.days--;
                  newTime.hours = 23;
                  newTime.minutes = 59;
                  newTime.seconds = 59;
                } else {
                  clearInterval(timer);
                  setIsRunning(false);
                }
              }
            }
          }

          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleInputChange = (unit, value) => {
    const numericValue = parseInt(value, 10) || 0;
    let newTime = { ...time, [unit]: numericValue };

    if (unit === 'minutes' && numericValue > 60) {
      const hours = Math.floor(numericValue / 60);
      const remainingMinutes = numericValue % 60;

      newTime = { ...time, hours, minutes: remainingMinutes };
    }

    if (unit === 'seconds' && numericValue > 60) {
      const minutes = Math.floor(numericValue / 60);
      const remainingSeconds = numericValue % 60;

      newTime = { ...time, minutes, seconds: remainingSeconds };
    }

    setTime(newTime);
  };

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTime({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="text-4xl font-bold mb-4">
        {String(time.days).padStart(2, '0')}:{String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
      </div>
      <div className="flex space-x-4">
        <input
          type="number"
          placeholder="Days"
          value={time.days}
          onChange={(e) => handleInputChange('days', e.target.value)}
          className="p-2 text-lg border rounded"
        />
        <input
          type="number"
          placeholder="Hours"
          value={time.hours}
          onChange={(e) => handleInputChange('hours', e.target.value)}
          className="p-2 text-lg border rounded"
        />
        <input
          type="number"
          placeholder="Minutes"
          value={time.minutes}
          onChange={(e) => handleInputChange('minutes', e.target.value)}
          className="p-2 text-lg border rounded"
        />
        <input
          type="number"
          placeholder="Seconds"
          value={time.seconds}
          onChange={(e) => handleInputChange('seconds', e.target.value)}
          className="p-2 text-lg border rounded"
        />
      </div>
      <div className="flex mt-4">
        <button onClick={handleStartStop} className="bg-blue-500 text-white p-2 rounded mr-2">
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset} className="bg-red-500 text-white p-2 rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
