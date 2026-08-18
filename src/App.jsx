import { useEffect, useState } from "react";
import "./index.css";

const petals = Array.from({ length: 28 }, (_, i) => i);

function App() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="page">
      {/* Falling cherry blossom petals */}
      <div className="petals" aria-hidden="true">
        {petals.map((petal) => (
          <span
            key={petal}
            className="petal"
            style={{
              left: `${(petal * 37) % 100}%`,
              animationDelay: `${(petal * 0.43) % 8}s`,
              animationDuration: `${7 + ((petal * 1.17) % 6)}s`,
            }}
          >
            🌸
          </span>
        ))}
      </div>

      <section className="hero">
        <div className="stars" aria-hidden="true">
          ✦　·　✧　　·　✦　　·　✧
        </div>

        <div className="scene">
          <div className="moon">☾</div>

          <div className="cloud cloud-one">☁</div>
          <div className="cloud cloud-two">☁</div>

          <div className="island">
            <div className="tree">
              <div className="trunk"></div>
              <div className="crown">🌸</div>
            </div>

            <div className="girl">
              <div className="hair"></div>
              <div className="head"></div>
              <div className="face">⌣</div>
              <div className="body"></div>
              <div className="book">📖</div>
            </div>

            <div className="grass grass-one"></div>
            <div className="grass grass-two"></div>
          </div>

          <div className="water">
            <span>〰〰〰〰〰〰〰〰〰〰〰</span>
            <span>〰〰〰〰〰〰〰〰〰〰〰</span>
            <span>〰〰〰〰〰〰〰〰〰〰〰</span>
          </div>
        </div>

        <div className={`message ${showMessage ? "visible" : ""}`}>
          <p className="little-line">For the girl who makes my world softer...</p>

          <h1>
            I love you,
            <br />
            <span>Nithila!!</span>
          </h1>

          <p className="love-note">
            If I could choose one little place in the whole world
            <br />
            to sit quietly and watch the sunset,
            <br />
            I'd still choose wherever you are. ♡
          </p>

          <div className="heart">♥</div>
        </div>

        <footer>made with a little bit of code & a lot of love ♡</footer>
      </section>
    </main>
  );
}

export default App;
