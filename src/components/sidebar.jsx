import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo">
        <h1>Carspace</h1>
      </div>
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/users" className={location.pathname === "/users" ? "active" : ""}>
          Users
        </Link>
        <Link to="/responses" className={location.pathname === "/responses" ? "active" : ""}>
          Responses
        </Link>
        <Link to="/manage-listings" className={location.pathname === "/manage-listings" ? "active" : ""}>
          Manage Listings
        </Link>
        <Link to="/bookings" className={location.pathname === "/bookings" ? "active" : ""}>
          Bookings
        </Link>
        <Link to="/faqs" className={location.pathname === "/faqs" ? "active" : ""}>
          FAQs
        </Link>
        <Link to="/blogs" className={location.pathname === "/blogs" ? "active" : ""}>
          Blogs
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
