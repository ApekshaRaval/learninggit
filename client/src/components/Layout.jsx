import React from "react";
import { Outlet, Link } from "react-router-dom";
const Layout = ({changetheme, mode}) => {
  return (
    <div className="main-container">
      <nav>
        <ul>
          <li>
            <Link to="/" className={`link-${mode}`}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={`link-${mode}`}>About</Link>
          </li>
          <li>
            <Link to="/dashboard" className={`link-${mode}`}>Dashboard</Link>
          </li>
          <li>
            <Link to="/form" className={`link-${mode}`}>Form</Link>
          </li>
          <li>
            <Link to="/nothing-here" className={`link-${mode}`}>Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />
<button onClick={changetheme} className={`btn-${mode}`}>
  chnage to {mode}theme
</button>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
