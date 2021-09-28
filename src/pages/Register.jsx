import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import netflixLogo from "../images/netflix-logo.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const handleStart = () => {
    emailRef.current.value = "";
    setEmail(true);
  };

  return (
    <div className="register">
      <header className="register-header">
        <img className="logo" src={netflixLogo} alt="netflix-logo" />
        <Link to="/" className="login-button">
          Sign In
        </Link>
      </header>
      <div className="register-form">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel
          eos molestiae totam vero consequuntur?
        </p>
        {!email ? (
          <>
            <div className="input">
              <input type="email" placeholder="Email address" ref={emailRef} />
              <button className="register-button" onClick={handleStart}>
                Get Started
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="input">
              <input type="password" placeholder="Password" />
              <Link to="/home" className="register-button">
                Start
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
