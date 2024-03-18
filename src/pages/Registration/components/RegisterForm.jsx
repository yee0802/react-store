import { useState } from "react";
import api from "../../../api";
import { useNavigate } from "react-router-dom";

export default function RegisterForm({ setRegisterResponse }) {
  const [userRegister, setUserRegister] = useState({
    username: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const form = document.querySelector(".register-form");
    form.reset();

    try {
      const res = await api.post("/user/register", userRegister);

      if (res.status === 201) {
        setUserRegister({
          username: "",
          password: "",
          email: "",
        });
        navigate("/login");
        return;
      }

      setRegisterResponse("Registration Failed");
    } catch (err) {
      console.log(err);
      setRegisterResponse(
        `Error: ${
          err.response.data.error ??
          "An error occurred while attempting to register"
        }.`
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserRegister({ ...userRegister, [name]: value });
  };

  return (
    <form className="register-form" onSubmit={handleLoginSubmit}>
      <label htmlFor="email">
        <b>EMAIL ADDRESS:</b>
        <input
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          required
        />
      </label>

      <label htmlFor="username">
        <b>USERNAME:</b>
        <input
          type="text"
          name="username"
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

      <button className="submit-register-form" type="submit">
        SIGN UP
      </button>
    </form>
  );
}
