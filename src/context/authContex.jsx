import React, { useEffect, useState } from "react";
import { app } from "../config/firebaseConfig";
import Loading from "../componentes/loading/loading";

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    app.auth().onAuthStateChanged(function (user) {
      setUser(user);
      setShowChild(true);
    });
  }, []);

  if (!showChild) {
    return <Loading></Loading>;
  } else {
    return <Auth.Provider value={{ user }}>{children}</Auth.Provider>;
  }
};
