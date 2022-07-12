import React from "react";
import { Outlet, Link } from "react-router-dom";

import Footer from "./Footer";

const Layout = () => (
  <div>
    <header>
      <h1>Mood Tracker App</h1>
      <h2>An app to help you understand patterns in your moods</h2>
      <nav className="topnav">
        <ul className="header-nav nav-links">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <Link to="/form">Add a mood</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
