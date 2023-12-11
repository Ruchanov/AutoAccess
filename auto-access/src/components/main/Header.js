import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Header({ handleSupportClick }) {
  return (
      <header className="hh">
        <div className="top-header">
          <div className="logo">
            <p>AutoAccess</p>
          </div>
          <div className="main-header-menu">
            <ul className="main-menu">
              <li><Link to="/cars">Cars</Link></li>
              <li><Link to="/spare">Spare Parts</Link></li>
              <li>Repairs and services</li>
            </ul>
          </div>
          <div className="second-menu">
            <ul className="main-menu">
              <Link to="/korzina#bottom-of-page">
                <FaShoppingCart />
              </Link>
              <li>About</li>
              <li onClick={handleSupportClick}>Support</li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
<<<<<<< HEAD
        <div className="main-header-menu">
          <ul className="main-menu">
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/spare">Spare Parts</Link></li>
            <li>Repairs and services</li>
          </ul>
        </div>
        <div className="second-menu">
          <ul className="main-menu">
            <Link to="/korzina">
              <FaShppingCart />
            </Link>
            <li>About</li>
            <li onClick={handleSupportClick}>Support</li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
=======
      </header>
>>>>>>> de617bd688de6c749864bcf8974e8d4de1426b7e
  );
}
