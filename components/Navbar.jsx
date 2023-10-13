import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="nav-left">
        <div className="logo">
          <img
            src="https://react-eduker.netlify.app/assets/img/logo/logo.png"
            alt=""
          />
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        <button className="apllyBtn mobileResBtn">Apply Now</button>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleNavbar}>
        <div className={`bar ${isOpen ? "open" : ""}`} />
        <div className={`bar ${isOpen ? "open" : ""}`} />
        <div className={`bar ${isOpen ? "open" : ""}`} />
        <button className="apllyBtn">Apply Now</button>
      </div>
      <div className={`slider ${isOpen ? "open" : ""}`} />
    </nav>
  );
};

export default Navbar;
