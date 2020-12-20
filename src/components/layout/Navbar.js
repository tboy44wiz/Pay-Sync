import React, { useState, useEffect } from "react";
import paysyncLogo from "../../assets/paysyncLogo.svg";
import { Link, useHistory } from "react-router-dom";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileButton, setMobileButton] = useState(true)
  const history = useHistory();

  const clickedMenu = () => {
    setShowMenu(!showMenu);
  };

  const showMobileButton = () => {
    if (window.innerWidth <= 968) {
      setMobileButton(false);
    } else {
      setMobileButton(true);
    }
  }

  useEffect(() => {
    showMobileButton()
    return () => {
      //
    }
  }, []);

  window.addEventListener("resize", showMobileButton);
  return (
    <div
      style={
        props.background === false ? { backgroundColor: "transparent" } : {}
      }
      className="navbar-container"
    >
      <img src={paysyncLogo} alt="" className="paysync-logo" />
      {(showMenu || mobileButton) && <div className="navbar-mid-nav">
        <div>Employers</div>
        <div>Employees</div>
        <div>
          <Link to="/blog">Blogs</Link>
        </div>
        <div>
          <Link to="/frequently-asked-question">FAQs</Link>
        </div>
        <div>
          <Link to="/about">About Us</Link>
        </div>
      </div>}
      {(showMenu || mobileButton) && <div className="navbar-right">
        <button className="login-button">Login</button>
        <button onClick={() => history.push("/access")} className="signup-button">Get Started</button>
      </div>}

      <div className="mobile-toggle">
        {showMenu ? <i className="fa fa-times"
          onClick={() => clickedMenu()}
          style={{ fontSize: "40px", color: "#14274e" }}></i> :
          <i className="fa fa-bars"
            onClick={() => clickedMenu()}
            style={{ fontSize: "40px", color: "#14274e" }}></i>}
      </div>
    </div>
  )
}

export default Navbar
