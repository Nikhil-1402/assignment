import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by looking for "currentUser" in localStorage
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setIsAuthenticated(true); // Set the authentication state to true
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("currentUser", "true"); // Store user as logged in
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("currentUser"); // Remove the logged-in status
  };

  return (
    <Router>
      <Navbar logout={logout} isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<h2 style={{marginTop:"80px"}}>Welcome to the Task Tracker!</h2>} />
        <Route
          path="/login"
          element={isAuthenticated ? <TaskList /> : <Login login={login} />}
        />
        <Route path="/signup" element={<Signup login={login} />} />
        <Route
          path="/tasks"
          element={isAuthenticated ? <TaskList /> : <Login login={login} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
