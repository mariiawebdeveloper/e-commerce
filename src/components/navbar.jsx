import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="logoNavbar">
        <Link to="/" id="NavTitle">
         Coast to Coast
        </Link>
      </div>
      <div className="links">
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
         Головна
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active-link" : ""}
        >
            Зв'язатись з нами
        </Link>
        <Link
          to="/aboutus"
          className={location.pathname === "/aboutus" ? "active-link" : ""}
        >
          Про наш магазин
        </Link>
        <Link to="/cart" id="cartlink" className={location.pathname === "/cart" ? "active-link" : ""}>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
