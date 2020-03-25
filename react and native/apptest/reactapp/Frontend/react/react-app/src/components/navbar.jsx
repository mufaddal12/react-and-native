import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  console.log("NavBar - render");
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link onClick={props.logout}>Logout</Link>
    </nav>
  );
};

export default NavBar;
