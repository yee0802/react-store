import { useState } from "react";
import api from "../../../api";

export default function LoginForm({ setLoginResponse }) {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/user/login", userLogin);

      if (res.status === 200) {
        const form = document.querySelector(".login-form");

        setUserLogin({ email: "", password: "" });
        localStorage.setItem("token", res.data.token);

        form.reset();
        return;
      }

      setLoginResponse("Login Failed");
    } catch (err) {
      console.log(err);
      setLoginResponse(
        `Error: ${
          err.response.data.error ??
          "An error occurred while attempting to login"
        }.`
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserLogin({ ...userLogin, [name]: value });
  };

  return (
    <form className="login-form" onSubmit={handleLoginSubmit}>
      <label htmlFor="email">
        <b>EMAIL ADDRESS:</b>
        <input
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          required
        />
      </label>

      <label htmlFor="password">
        <b>PASSWORD:</b>
        <input
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          required
        />
      </label>

      <button className="submit-login-form" type="submit">
        SIGN IN
      </button>
    </form>
  );
}
