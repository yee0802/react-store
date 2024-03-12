import { Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import { useState } from "react";
import "./index.css";

export default function Register() {
  const [registerResponse, setRegisterResponse] = useState("");

  return (
    <main className="register-page container">
      <section className="register-container">
        <header className="register--header">
          <h2>Register</h2>

          {registerResponse && (
            <p className="register-response">{registerResponse}</p>
          )}
        </header>

        <RegisterForm setRegisterResponse={setRegisterResponse} />

        <p className="register--redirect">
          Already got an account? Login <Link to="/login">here</Link>
        </p>
      </section>
    </main>
  );
}
