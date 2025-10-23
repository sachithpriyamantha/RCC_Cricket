// src/hooks/UseAuth.js

import { useState,useEffect, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // Store the role
  const [user, setUser] = useState( null); // Optional: Store user details
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");
    // console.log("Saved user data: ", savedUserData);

    if (savedUserData) {
      try {
        const parsedUserData = JSON.parse(savedUserData);
        const { username, roles } = parsedUserData;
        setIsAuthenticated(true);
        setUserRole(roles.includes("ROLE_ADMIN") ? "admin" : roles[0]);
        setUser(parsedUserData);
        // console.log("User restored from storage:", username, roles);
      } catch (error) {
        // console.error("Error parsing user data from storage:", error);
        localStorage.removeItem("userData");
        sessionStorage.removeItem("userData");
        setIsAuthenticated(false);
      }
    } else {
      // console.log("No user data found in storage.");
      setIsAuthenticated(false);
    }

    setLoading(false); // Set loading to false after checking authentication
  }, []);
  


  const login = (role, userData) => {
    setIsAuthenticated(true);
    //setUserRole(role); // Set user role on login
    setUser(userData); // Set user data on login

    localStorage.setItem("userData", JSON.stringify(userData)); // Adjust this as per your storage type
    setLoading(false);
  };

  useEffect(() => {
  const savedIsAuthenticated = localStorage.getItem("isAuthenticated");
  if (savedIsAuthenticated === "true") {
    // Proceed with rehydrating user data
  } else {
    // Handle unauthenticated state
  }
}, []);

 

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null); // Clear the role on logout
    setUser(null); // Clear user data on logout
    setLoading(false);

    localStorage.removeItem("userData");
    localStorage.removeItem("user");
    localStorage.removeItem("roles");
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("userData");
    // Clear sessionStorage
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("user"); // Optionally, if 'user' exists here
    sessionStorage.removeItem("roles"); // Optionally, if 'roles' exist here
  };



  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);


