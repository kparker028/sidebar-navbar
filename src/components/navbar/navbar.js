import React from "react";
import "./navbar.css";

export const Navbar = ({children}) => {
    return(
    <div className="navContainer">
        <div className="navNavigation">
            <ol>
                <button>Home</button>
                <button>Services</button>
                <button>About Us</button>
                <button>Contact Us</button>
            </ol>
        
        </div>
    
    
    </div>
    );
}