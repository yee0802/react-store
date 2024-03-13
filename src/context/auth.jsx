import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(null);
  const [logout, setLogout] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (logout) {
      localStorage.removeItem("token");
      setToken(null);
      setLogout(false);
      navigate("/login", { state: null });
      return;
    }

    if (storedToken && !token) {
      setToken(storedToken);
    }

    if (storedToken && !userId) {
      setUserId(jwtDecode(storedToken).userId);
    }

    if (storedToken && token && location.state) {
      console.log("location activated", location);
      navigate(location.state.from.pathname);
    }
  }, [location.state?.from?.pathname, navigate, logout, location, token]);

  const handleLogout = () => {
    setLogout(true);
    setToken(null);
    setUserId(null);
  };

  const value = {
    token,
    userId,
    onLogout: handleLogout,
    setToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
