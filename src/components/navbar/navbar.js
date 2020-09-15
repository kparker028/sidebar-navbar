import React, { useState } from "react";
import "./navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import  {SidebarData}  from "./sidebar";

function Navbar() {
    const [ sidebar, setSidebar ] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return(
        <>
        
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={ sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </link>
                </li>
                { SidebarData.map(( item, index ) => {
                    return(
                        <li key={index} className={item.cName}>
                            <link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </link>
                        </li>
                    );
                })}
            </ul>
        </nav>
            
          </>
    );
}

export default Navbar;