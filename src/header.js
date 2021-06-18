import React from 'react'
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
    return (
        <div>
             {/* header */}
             <div className="header">
                <h1 className="title">Eco Ocean</h1>
                <div className="header-options">
                    <Link to="/" className="options"><h3 >Home</h3></Link>
                    <Link to="/" className="options"><h3 className="options">Donate</h3></Link>
                    <Link to="/" className="options"><h3 className="options">Stories</h3></Link>
                    <Link to="/" className="options"><h3 className="options">Adopt</h3></Link>
                    <Link to="/" className="options"><h3 className="options">Community</h3></Link>
                    <Link to="/" className="options"><h3 className="options">Contact Us</h3></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
