import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import { jwtDecode } from "jwt-decode";
import api from "../api/index.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(null);
  const [logout, setLogout] = useState(false);
  const [userId, setUserId] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

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

    if (storedToken && userId && !loggedInUser) {
      fetchCurrentUserById(userId).then(setLoggedInUser);
    }

    if (storedToken && token && location.state) {
      navigate(location.state.from.pathname);
    }
  }, [
    location.state?.from?.pathname,
    navigate,
    logout,
    location,
    token,
    userId,
  ]);

  const fetchCurrentUserById = async (id) => {
    try {
      const res = await api.get(`/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data.user;
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  const handleLogout = () => {
    setLogout(true);
    setToken(null);
    setUserId(null);
  };

  const value = {
    token,
    userId,
    loggedInUser,
    onLogout: handleLogout,
    setToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }

  return children;
};
