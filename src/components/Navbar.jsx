import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logout, isAuthenticated }) => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/tasks">Tasks</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
