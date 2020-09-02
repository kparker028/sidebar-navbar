import React, { useState } from "react";
import "./navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

export const Navbar = ({}) => {
    const [ sidebar, setSidebar ] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return(
    <div className="navbar">
        <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
    
    </div>
    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
            <li className="navbar-toggle">
                <link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                </link>
            </li>
        </ul>
    </nav>

    );
}