import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />
        <Link className="login-button" to="/home">
          Login
        </Link>
        <span>
          New to Netflix?
          <Link to="/register">
            <b> Sign up now.</b>
          </Link>
        </span>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <b>Learn more</b>.
        </small>
      </form>
    </div>
  );
};

export default Login;
