import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/GlobalContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import Footer from "../Footer";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setLoading(false);
      setError("Failed to log in");
    }
  }

  return (
    <div className="mainC">
      <div className="containerLog">
        <div className="c2">
          <div className="controls">
            <form className="signup" onSubmit={handleSubmit}>
              <h2 className="signup1">Log In</h2>

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
                placeholder="Password*"
                ref={passwordRef}
                required
              />
              <button className="btn" disabled={loading} type="submit">
                Log In
              </button>
            </form>
            <div className="signup2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </div>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}
