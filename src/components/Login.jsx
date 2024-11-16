/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { doSignInWithEmailAndPassword } from "./Context/AuthContext/auth";
import { useAuth } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
export default function Login() {
  const navigate = useNavigate();

  const userLogin = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  const [message, setMessage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Attempting to log in with Email:", email);
    try {
      if (!isSignIn) {
        setIsSignIn(true);
        await doSignInWithEmailAndPassword(email, password);
        console.log("Login successful for Email:", email);
        setMessage("Login successful!");
        navigate("/voting");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setMessage("Login failed. Please check your credentials.");
      setIsPopupOpen(true);
    }
    console.log(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="foromTitle">
        <span className="material-symbols-outlined mainImg">how_to_vote</span>
        <h1 className="">Please sign in</h1>
      </div>

      <div className="inputForom">
        <label>Email </label>
        <input
          type="email"
          placeholder="email@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="inputForom">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Popup
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        modal
        nested
      >
        {(close) => (
          <div className="popup-container">
            <h2 className="popup-title">Error</h2>
            <p className="popup-message">{message}</p>
            <button className="popup-close" onClick={close}>
              Close
            </button>
          </div>
        )}
      </Popup>
      <button type="submit">Sign in</button>
      <p>© Elections Day 2024</p>
    </form>
  );
}
