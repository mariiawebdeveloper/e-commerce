import React from "react";
import {Link, useLocation} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import "./footer.css";
import inst from '../assets/інста.png'
import twit from '../assets/Vector (1).png'

export const Footer = () => {
    const location = useLocation();

    return (
        <div className="footer">
            <div className="logo">
                <Link to="/" id="NavTitle">
                    Coast to Coast
                </Link>
            </div>
            <div className="links2">
                <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
                    Головна
                </Link>
                <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "active-link" : ""}
                >
                    Контакти
                </Link>

                <Link
                    to="/aboutus"
                    className={location.pathname === "/aboutus" ? "active-link" : ""}
                >
                    Про наш магазин
                </Link>
                <Link
                    to="/cart"
                    id="cartlink"
                    className={location.pathname === "/cart" ? "active-link" : ""}
                >
                    <ShoppingCart size={32}/>
                </Link>

            </div>
            <div className={'social-location'}>
                <div><img src={inst}/></div>
                <div><img src={twit}/></div>
                <div>coastotcoast@gmail.com</div>
            </div>
        </div>
    );
};