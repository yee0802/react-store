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
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    console.log("Activated");
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

    if (storedToken && userId && !loggedInUser && !refresh) {
      fetchCurrentUserById(userId).then(setLoggedInUser);
    }

    if (loggedInUser && refresh && userId) {
      console.log("refreshing...");
      fetchCurrentUserById(userId).then(setLoggedInUser);
      setRefresh(false);
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
    loggedInUser,
    refresh,
  ]);

  const removeSavedItemById = async (id) => {
    try {
      console.log("removing saved item...");
      const opts = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const dataToUpdate = {
        savedItems: {
          disconnect: [{ id: id }],
        },
      };

      const res = await api.patch(`/user/${userId}`, dataToUpdate, opts);
      setRefresh(true);

      return;
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

  const addSavedItemById = async (id) => {
    try {
      console.log("adding saved item...");
      const opts = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const dataToUpdate = {
        savedItems: {
          connect: [{ id: id }],
        },
      };

      const res = await api.patch(`/user/${userId}`, dataToUpdate, opts);
      setRefresh(true);

      return;
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

  const fetchCurrentUserById = async (id) => {
    console.log("fetching user by id....");
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
    setLoggedInUser(null);
  };

  const value = {
    token,
    userId,
    loggedInUser,
    setToken,
    setRefresh,
    removeSavedItemById,
    addSavedItemById,
    onLogout: handleLogout,
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
