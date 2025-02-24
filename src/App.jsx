import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import Responses from "./components/pages/Responses";
import ManageListings from "./components/pages/ManageListings";
import Bookings from "./components/pages/Bookings";
import FAQs from "./components/pages/FAQs";
import Blogs from "./components/pages/Blogs";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/responses" element={<Responses />} />
            <Route path="/manage-listings" element={<ManageListings />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
