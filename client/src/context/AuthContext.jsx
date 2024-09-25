import { createContext, useContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuth({ token });
    }
  }, []);

  const updateUser = (userData) => {
    setAuth((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        ...userData,
      },
    }));
  };

  const value = useMemo(() => ({ auth, setAuth, updateUser }), [auth, setAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth non définit");
  }
  return context;
}
