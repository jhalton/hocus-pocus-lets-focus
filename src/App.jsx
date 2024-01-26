import "./App.css";

function App() {
  return (
    <>
      <main className="main">
        <div className="main_timer">
          <h1>WORK</h1>
          <h2>00:25:00</h2>
        </div>
        <div>
          <img src="images.png" alt="hourglass" />
        </div>
        <div className="main_progress-bar"></div>
      </main>
      <div className="main_timer-options">
        <button>New Timer</button>
        <button>Hide Timer</button>
      </div>
    </>
  );
}

export default App;
