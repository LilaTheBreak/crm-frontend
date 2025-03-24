// src/pages/Login.js
import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-logo">THE BREAK</div>
      <h2 className="login-subtitle">TALENT MANAGEMENT PORTAL</h2>
      <div className="login-box">
        <iframe
          src="https://accounts.google.com/signin"
          className="google-login-frame"
          title="Google Login"
        ></iframe>
      </div>
    </div>
  );
};

export default Login;

