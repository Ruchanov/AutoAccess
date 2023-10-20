import React from "react";
import "./Header.css";
export default function Header({ handleSupportClick }) { 
  return (
    <header>
      <div className="top-header">
        <div className="logo">
          <p>AutoAccess</p>
        </div>
        <div className="main-header-menu">
          <ul className="main-menu">
            <li>Cars</li>
            <li>Spare Parts</li>
            <li>Repairs and services</li>
          </ul>
        </div>
        <div className="second-menu">
          <ul className="main-menu">
            <li>About</li>
            <li onClick={handleSupportClick}>Support</li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
