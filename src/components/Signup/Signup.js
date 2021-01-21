import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/GlobalContext";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";
import Footer from "../Footer";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push("/");
    } catch {
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <div className="mainC">
      <div className="containerSign">
        <div className="c12">
          <div className="controls">
            <form className="signup" onSubmit={handleSubmit}>
              <h2 className="signup1">Sign Up</h2>
              <input
                className="username"
                type="email"
                ref={emailRef}
                placeholder="Email*"
                required
              />
              <input
                className="username"
                type="password"
                ref={passwordRef}
                placeholder="Password*"
                required
              />
              <input
                className="username"
                type="password"
                ref={passwordConfirmRef}
                placeholder="Confirm Password*"
                required
              />
              <button className="btn" disabled={loading} type="submit">
                Sign Up
              </button>
            </form>
            <div className="signup2">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
          </div>
          {error && <div className="errors">{error}</div>}
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}
