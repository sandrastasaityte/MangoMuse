import React, { useState } from "react";
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Welcome to SugarSpell</h2>

        <div className="auth-toggle">
          <button
            className={isLogin ? "toggle-btn active" : "toggle-btn"}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "toggle-btn active" : "toggle-btn"}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <div className="auth-form">
          {/* Use SignedOut so users already signed in won't see the forms */}
          <SignedOut>
            {isLogin ? (
              <SignIn routing="path" path="/auth" />
            ) : (
              <SignUp routing="path" path="/auth" />
            )}
          </SignedOut>

          <SignedIn>
            <div className="signed-in-msg">
              <p>You are signed in.</p>
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Auth;
