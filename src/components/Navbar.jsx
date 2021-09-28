import { useState } from "react";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import netflixLogo from "../images/netflix-logo.png";
import userIcon from "../images/user-icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <nav className={isScroll ? "navbar scroll" : "navbar"}>
      <div className="navbar-left">
        <img className="netflix-logo" src={netflixLogo} alt="netflix-logo" />
        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and Popular</span>
        <span>My List</span>
      </div>
      <div className="navbar-right">
        <Search className="icon" />
        <span>KID</span>
        <Notifications className="icon" />
        <img className="icon" src={userIcon} alt="user-icon" />
        <div className="profile">
          <ArrowDropDown className="icon" />
          <div className="options">
            <span>Settings</span>
            <Link to="/">Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
