import React, { useEffect } from "react";
import { useAuth } from "../store/auth";
import { Navigate } from "react-router-dom";

function Logout() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to="/login" />;
}

export default Logout;
