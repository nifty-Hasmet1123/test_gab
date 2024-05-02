import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../actions/userAction'; 
import "../styling/navbar.css";

const Navbar = ({ navigateToLoginPage, navigateToSignUpPage}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Assuming you have a user object in your Redux state

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigateToLoginPage(); // Navigate to login page
  };
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-authenticate-list">
          {user ? (
                  <div>
                    <span className='navbar-text'>Welcome, {user.username}</span>
                    <Link to="/" className='navbar-text' onClick={handleLogout}>Logout</Link>
                  </div>
                ) : (
                  <>
                    <Link to="/login" className='navbar-text' onClick={navigateToLoginPage}>Login</Link>
                    <Link to="/signup" className='navbar-text' onClick={navigateToSignUpPage}>Sign up</Link>
                  </>
                )}
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
