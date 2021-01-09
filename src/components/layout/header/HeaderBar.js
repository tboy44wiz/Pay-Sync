import React from "react";

//  Importing "_headerBar.css".
import './_headerBar.css';

import paysyncLogo from "../../../assets/paysyncLogo.svg";
import { Link, useHistory } from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

const HeaderBar = (props) => {
  const history = useHistory();

  return (
      <div className="nav__wrapper">
        <Navbar collapseOnSelect expand="lg" variant="light" className="mNavBar" style={
          props.background === false ? { backgroundColor: "transparent" } : {}
        }>
          <Navbar.Brand className="mNavBrand" to="/">
            <img src={paysyncLogo} alt="" className="paysync-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse className="mCollapsable" id="responsive-navbar-nav">
            <Nav className="mr-auto navbar-mid-nav">
              <Link to="#">Employers</Link>
              <Link to="#">Employees</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/frequently-asked-question">FAQs</Link>
              <Link to="/about">About Us</Link>
            </Nav>

            <Nav className="navbar-right">
              <button className="login-button">Login</button>
              <button onClick={() => history.push("/access")} className="signup-button">Get Started</button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  )
}

export default HeaderBar
