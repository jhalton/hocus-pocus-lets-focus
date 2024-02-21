import stopwatch from "./Resources/s-watch.png";
import { useState, useEffect } from "react";

const PromptTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    //TODO
    //I want to count down each second. When the seconds run to 0,
    //we need to decrement the minutes, then start the seconds over
  });

  return (
    <>
      <div>
        <h1>Prompt Timer</h1>
        <span>
          {hours}:{minutes}:{seconds}
        </span>
        <img src={stopwatch} alt="stopwatch logo" />
        <div className="prompt-timer--buttons">
          <button>Clear Timer</button>
          <button>Set Timer</button>

          <button>Start Timer</button>
          <button>Stop Timer</button>
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
