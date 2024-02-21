import stopwatch from "./Resources/s-watch.png";
import { useState, useEffect } from "react";

const PromptTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    //TODO
    //I want to count down each second. When the seconds run to 0,
    //we need to decrement the minutes, then start the seconds over

    return () => clearInterval(intervalId);
  }, intervalId);

  const handleClearTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);

    clearInterval(intervalId);
    setIsPaused(true);
  };

  const handleStartTimer = () => {
    if (isPaused) {
      const id = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            if (hours > 0) {
              setHours((prevHours) => prevHours - 1);
              setMinutes(59);
              setSeconds(59);
            } else {
              clearInterval(id);
              setIsPaused(true);
            }
          }
        }
      }, 1000);
      setIntervalId(id);
      setIsPaused(false);
    }
  };

  const handleStopTimer = () => {
    //TODO
    //Pause timer
    clearInterval(intervalId);
    setIsPaused(true);
  };

  return (
    <>
      <div>
        <h1>Prompt Timer</h1>
        <span>
          {hours}:{minutes}:{seconds}
        </span>
        <img src={stopwatch} alt="stopwatch logo" />
        <div className="prompt-timer--buttons">
          <button onClick={handleClearTimer}>Clear Timer</button>
          <button>Set Timer</button>
          <button onClick={handleStartTimer}>Start Timer</button>
          <button onClick={handleStopTimer}>Stop Timer</button>
          <form>
            <label>Hours: </label>
            <input
              type="text"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
            <label>Minutes: </label>
            <input
              type="text"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
            <label>Seconds: </label>
            <input
              type="text"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default PromptTimer;
