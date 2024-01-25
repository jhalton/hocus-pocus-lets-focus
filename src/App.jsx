import { useState } from "react";

const tipbits = [
  "Lets Pomodora!!!!",
  "Ehhh I think well be lazy slugs today",
  "Hard work is best work",
  "Its the litset when your working",
  "Focus is the best",
  "Naps > working all day",
  "Where are my kitties...",
];

function App() {
  const [index, setIndex] = useState(null);
  return (
    <div>
      <h1>Hocus Pocus! Lets Focus!</h1>
      <h2>{tipbits[index]}</h2>
      <p>Let see what we are doing today!</p>
      <button
        onClick={() => {
          setIndex(Math.floor(Math.random() * tipbits.length));
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
