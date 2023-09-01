import { Routes, Route, useNavigate } from "react-router-dom";

import desktopIllustration from "./images/illustration-sign-up-desktop.svg";
import mobileIllustration from "./images/illustration-sign-up-mobile.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Subscribe />
    </div>
  );
}

function Subscribe() {

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <main>
      <section className="content-container">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <span className="list-space"></span>Product discovery and building
            what matters
          </li>
          <li>
            <span className="list-space"></span>Measuring to ensure updates are
            a success
          </li>
          <li>
            <span className="list-space"></span>And much more!
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@company.com"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
          />
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </section>
      <section className="img-container">
        <img
          clasName="desktop-illustration"
          src={desktopIllustration}
          alt="Computer illustration"
        />
        <img
          src={mobileIllustration}
          alt="Computer illustration"
          className="mobile-illustration"
        />
      </section>
    </main>
  );
}

function Success() {
  return (
    <div>
      Success!
    </div>
  )
}

export default App;
