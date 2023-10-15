import {useState} from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet, useNavigate } from "react-router-dom";
import desktopIllustration from "./images/illustration-sign-up-desktop.svg";
import mobileIllustration from "./images/illustration-sign-up-mobile.svg";
import successIcon from './images/icon-success.svg';

function App() {
  const [email, setEmail] = useState("");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Subscribe setEmail={setEmail} email={email} />} />
        <Route path="success" element={<Success email={email} setEmail={setEmail} />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

function Root() {
  return (
    <div className="background">
      <Outlet />
    </div>
  )
}

function Subscribe({ setEmail, email }) {
  const navigate = useNavigate();
  const errorMessage = document.querySelector(".error-message");
  const inputBox = document.querySelector("input");

  function handleClick() {
    errorMessage.style.display = "none";
    inputBox.classList.remove("input-error");
  }

  function handleChange({target}) {
    setEmail(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isValid = regex.test(email);;

    if (isValid) {
      navigate("/success");
    } else {
      errorMessage.style.display = "block";
      inputBox.classList.add('input-error');
    }
  };

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
        <form onSubmit={handleSubmit} noValidate>
          <div className="label-container">
            <label htmlFor="email">Email address</label>
            <p className="error-message">Valid email required</p>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@company.com"
            onClick={handleClick}
            onChange={handleChange}
          />
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </section>
      <section className="img-container">
        <img
          className="desktop-illustration"
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

function Success({ email, setEmail }) {
  const navigate = useNavigate();

  function handleClick() {
    setEmail('');
    navigate('/');
  }

  return (
    <section className="success-message">
      <img src={successIcon} alt="Success icon" />
      <div className="text-container">
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
      </div>
      <button onClick={handleClick}>Dismiss message</button>
    </section>
  );
}

export default App;
