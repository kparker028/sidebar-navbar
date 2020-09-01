import React from "react";
import "./navbar.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = ({children}) => {
    return(
    <div className="navbar">
        <Link to="#" className="menu-bars">
            <FaIcons.FaBars />
        </Link>
    
    </div>
    );
}