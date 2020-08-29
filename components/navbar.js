import React from "react";
import "./navbar.css";

export const Navbar = ({children}) => {
    return(
    <div className="navContainer">
        <div className="navNavigation">
            <ol>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#"></a>About Us</li>
                <li><a href="#"></a>Contact Us</li>
            </ol>
        
        </div>
    
    
    </div>
    );
}
    