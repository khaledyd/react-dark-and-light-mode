import React from "react";
import "./log.css";

export default function Log() {
  return(
    <div className="loginn">
      <div className="login-items">
        <div className="title">
          <p className="login-title">Log in</p>
        </div>

        <div className="form">
          <span className="email">Email</span>
          <input className="input-lg" type="text"></input>
          <span className="password">Password</span>
          <input className="input-lg" type="password"></input>
        </div>
      </div>
      <div className="btn-lg">
        <button className="login-btn">Log in</button>
        <p className="forget">Forgot password</p>
      </div>
    </div>
  );
}
