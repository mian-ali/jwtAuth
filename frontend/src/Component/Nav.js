import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <ul>
        <Link to="/register">
          <li>Register</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <li>DashBoard</li>
      </ul>
    </div>
  );
}

export default Nav;
