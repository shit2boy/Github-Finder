import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <div className="navbar bg-primary">
      <h1>{props.title}</h1>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};
NavBar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavBar;
