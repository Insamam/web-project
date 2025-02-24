import React, { useState } from "react";
import Sidebar from "../sidebar";
import supabase from "../../../supabaseClient";
import "./ManageListings.css";

const ManageListings = () => {
  const [formData, setFormData] = useState({
    carName: "",
    ownerName: "",
    price: "",
    year: "",
    engineSize: "",
    mileage: "",
    driverType: "",
    cylinders: "",
    seats: "",
    fuelType: "",
    doors: "",
    colour: "",
    description: "",
    cityMPG: "",
    highwayMPG: "",
    address: "",
    addressLink: "",
    video: "",
    features: {},
    mediaFiles: [], // For uploaded files
  });

  const [mediaError, setMediaError] = useState(""); // Stores media validation error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        features: { ...prevData.features, [name]: checked },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "video/mp4"];
    const maxSize = 5 * 1024 * 1024; // 5MB limit

    for (let file of files) {
      if (!allowedTypes.includes(file.type)) {
        setMediaError("Only JPG, PNG, JPEG images & MP4 videos are allowed.");
        return;
      }
      if (file.size > maxSize) {
        setMediaError("Each file must be smaller than 5MB.");
        return;
      }
    }

    setMediaError(""); // Clear error if valid
    setFormData((prevData) => ({
      ...prevData,
      mediaFiles: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.mediaFiles.length === 0) {
      setMediaError("Please upload at least one media file.");
      return;
    }

    // Log the form data (For now, you can integrate API later)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="main-content">
      <div className="header">
        <h2>Add Car Details</h2>
        <div className="profile">
          <i className="fas fa-cog"></i>
          <img
            src="https://storage.googleapis.com/a1aa/image/1y0wDSJi7mwhpgTXmggxD2Dmj0DAs69u1_PpfqZDyA0.jpg"
            alt="User"
          />
          <span>Name</span>
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="grid">
            <input type="text" name="carName" placeholder="Car name" onChange={handleChange} />
            <input type="text" name="ownerName" placeholder="Owner name" onChange={handleChange} />
            <input type="text" name="price" placeholder="Price" onChange={handleChange} />
            <input type="text" name="year" placeholder="Year" onChange={handleChange} />
            <input type="text" name="engineSize" placeholder="Engine Size" onChange={handleChange} />
            <input type="text" name="mileage" placeholder="Mileage" onChange={handleChange} />
            <input type="text" name="driverType" placeholder="Driver Type" onChange={handleChange} />
            <input type="text" name="cylinders" placeholder="Cylinders" onChange={handleChange} />
            <input type="text" name="seats" placeholder="Seats" onChange={handleChange} />
            <input type="text" name="fuelType" placeholder="Fuel type" onChange={handleChange} />
            <input type="text" name="doors" placeholder="Doors" onChange={handleChange} />
            <input type="text" name="colour" placeholder="Colour" onChange={handleChange} />
          </div>

          <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>

          <div className="grid">
            <input type="text" name="cityMPG" placeholder="City MPG" onChange={handleChange} />
            <input type="text" name="highwayMPG" placeholder="Highway MPG" onChange={handleChange} />
          </div>

          <div className="grid">
            <input type="text" name="address" placeholder="Address" onChange={handleChange} />
            <input type="text" name="addressLink" placeholder="Address Link (Google Maps)" onChange={handleChange} />
          </div>

          {/* Media Upload Section */}
          <div className="media-upload">
            <label>Media</label>
            <div className="upload-box">
              <i className="fas fa-cloud-upload-alt"></i>
              <p>Drop files here or click to upload.</p>
              <input type="file" multiple accept="image/*,video/mp4" onChange={handleFileChange} />
            </div>
            {mediaError && <p className="error-message">{mediaError}</p>}
          </div>

          <input type="text" name="video" placeholder="Video (mp4)" onChange={handleChange} />

          {/* Features Section */}
          <div className="features-container">
            <div className="features">
              <label className="features-title">Features:</label>
              <div className="features-grid">
                {[
                  "A/C Front",
                  "CCTV",
                  "Leather",
                  "Navigation system",
                  "Rain sensing wipe",
                  "Sun roof",
                  "Central locking",
                  "Sports package",
                  "Front fog light",
                  "Rear Spoilers",
                  "Power steering",
                ].map((feature) => (
                  <div key={feature} className="feature-item">
                    <input type="checkbox" name={feature} onChange={handleChange} />
                    <label>{feature}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="reset" className="clear-btn">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageListings;
