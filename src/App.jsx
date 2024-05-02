import Navbar from "./components/Navbar";
import Task from "./components/Task";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

function App() {
  const [showHomePage, setShowHomePage] = useState(true);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignUpPage, setShowSignUpPage] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated && !showSignUpPage) {
      setShowLoginPage(true);
    }
  }, [isAuthenticated, showSignUpPage]);

  const navigateToHomePage = () => {
    setShowHomePage(true);
    setShowSignUpPage(false);
  };

  const navigateToLoginPage = () => {
    setShowHomePage(false);
    setShowLoginPage(true);
    setShowSignUpPage(false);
  };

  const navigateToSignUpPage = () => {
    setShowHomePage(false);
    setShowSignUpPage(true);
  };

  const handleSubmitLogin = () => {
    navigateToHomePage();
  };

  const handleSubmitSignUp = () => {
    navigateToLoginPage();
  };
  return (
    <>
      <Navbar
        navigateToHomePage={navigateToHomePage}
        navigateToLoginPage={navigateToLoginPage}
        navigateToSignUpPage={navigateToSignUpPage}
      />

      {isAuthenticated ? (
        <>
          {showHomePage && (
            <>
              <Task />
            </>
          )}
        </>
      ) : (
        <>
          {showSignUpPage ? (
            <SignUp submitSignUp={handleSubmitSignUp} />
          ) : (
            showLoginPage && <Login submitLogin={handleSubmitLogin} />
          )}
        </>
      )}
    </>
  );
}

export default App;
