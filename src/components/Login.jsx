/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { doSignInWithEmailAndPassword } from "./Context/AuthContext/auth";
import { useAuth } from "./Context/AuthContext";
export default function Login() {
  const userLogin = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    if (!isSignIn) {
      setIsSignIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }
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

      <button type="submit">Sign in</button>
      <p>© Elections Day 2024</p>
    </form>
  );
}
