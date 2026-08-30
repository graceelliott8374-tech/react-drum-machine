import { useCallback, useEffect, useState } from "react";
import "./App.css";

import DrumPad from "./Components/Buttons/DrumPad.jsx";
import Header from "./Components/Header/Header.jsx";
import { drumSounds } from "./data/drumsounds.js";

function App() {
  const [activeSound, setActiveSound] = useState("Ready");

  const playSound = useCallback((sound) => {
    const audio = document.getElementById(sound.key);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play().catch((error) => {
      console.error("Unable to play audio:", error);
    });

    setActiveSound(sound.name);
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      const pressedKey = event.key.toUpperCase();
      const sound = drumSounds.find(
        (drumSound) => drumSound.key === pressedKey,
      );

      if (sound) {
        playSound(sound);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playSound]);

  return (
    <main className="app">
      <Header />

      <section
        id="drum-machine"
        className="drum-machine"
        aria-label="Interactive drum machine"
      >
        <div className="drum-machine__display" aria-live="polite">
          <span>Now playing</span>
          <p id="display">{activeSound}</p>
        </div>

        <div className="drum-pad-grid">
          {drumSounds.map((sound) => (
            <DrumPad key={sound.key} sound={sound} onPlay={playSound} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
