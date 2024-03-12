import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import "./index.css";

export default function Login() {
  const [loginResponse, setLoginResponse] = useState("");

  return (
    <main className="login-page container">
      <section className="login-container">
        <header className="login--header">
          <h2>Login</h2>

          {loginResponse && <p className="login-response">{loginResponse}</p>}
        </header>

        <LoginForm setLoginResponse={setLoginResponse} />

        <p className="login--redirect">
          Haven't got an account? Register <Link to="/register">here</Link>
        </p>
      </section>
    </main>
  );
}
