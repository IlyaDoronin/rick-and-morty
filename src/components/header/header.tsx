import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.ico";

import "./header.sass";

export const Header: FC = () => {
    return (
        <header className="header container">
            <Link to="/">
                <div className="header__logo">
                    <img className="header__logo_img" src={logo} alt="logo" />
                    <p className="header__logo_text">Home</p>
                </div>
            </Link>
        </header>
    );
};
