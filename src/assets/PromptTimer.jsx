import stopwatch from "./Resources/s-watch.png";
import { useState } from "react";

const PromptTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

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
        </div>
      </div>
    </>
  );
};

export default PromptTimer;
