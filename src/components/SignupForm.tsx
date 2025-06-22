import React, { useState } from "react";
import "../styles/SignupForm.css";

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const validateEmail = (email: string) => {
    return email.includes("@") && email.includes(".");
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    setEmailError("");
    window.location.href = "https://app.loch.one/welcome";
  };

  return (
    <form className="signup-form-container" onSubmit={handleEmailSubmit}>
      <h2 className="signup-heading">Sign up for exclusive access.</h2>

      <div className="signup-input-wrapper">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) setEmailError("");
          }}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          placeholder="Your email address"
          className={`signup-input ${isEmailFocused ? "focused" : ""} ${
            emailError ? "error" : ""
          }`}
        />
        {emailError && <p className="signup-error">{emailError}</p>}
      </div>

      <button type="submit" className="signup-submit-button">
        Get started
      </button>

      <p className="signup-subtext">
        You’ll receive an email with an invite link to join.
      </p>
    </form>
  );
};

export default SignupForm;
