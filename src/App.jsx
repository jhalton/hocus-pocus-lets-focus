import { useEffect, useState } from "react";
import { useSound } from "use-sound";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [timeValue, setTimeValue] = useState(0);
  const [playSound] = useSound("./resources/audio/ping-82822.mp3");

  const startTimer = () => {
    if (!timerId) {
      setTimerId(
        setInterval(() => {
          playSound();
          setTime((time) => time - 1);
        }, 1000)
      );
    }
  };

  const stopTimer = () => {
    clearInterval(timerId);
    if (timerId) setTimerId(null);
  };

  useEffect(() => {
    if (time <= 0 && timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  }, [time]);

  return (
    <>
      <main className="main">
        <div className="main_timer">
          <h1>WORK</h1>
          <h2>{`${Math.floor(time / 3600)}:${Math.floor((time % 3600) / 60)}:${
            time % 60
          }`}</h2>
        </div>
        <div>
          <img src="images.png" alt="hourglass" />
        </div>
        <div className="main_progress-bar"></div>
      </main>
      <div className="main_timer-options">
        <input
          type="number"
          placeholder={time}
          onChange={(e) => setTimeValue(e.target.value)}
        />
        <button onClick={() => setTime(timeValue)}>Set Time</button>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
      </div>
    </>
  );
}

export default App;
