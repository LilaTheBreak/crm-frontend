import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();

    const expectedCode = "BREAK2025"; // 🔐 This would come from backend/email token in real use

    if (code === expectedCode) {
      navigate("/dashboard"); // ✅ Redirect to dashboard or create account page
    } else {
      setError("Invalid code. Please check your email and try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-logo">THE BREAK</h1>
        <h2 className="signup-subtitle">Enter Your Access Code</h2>
        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter code from email"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="signup-input"
          />
          <button type="submit" className="signup-button">
            Verify & Continue
          </button>
        </form>
        {error && <p className="signup-error">{error}</p>}
        <p className="signup-note">
          This page is only accessible from a secure link. Contact us if you're having trouble.
        </p>
      </div>
    </div>
  );
};

export default Signup;
