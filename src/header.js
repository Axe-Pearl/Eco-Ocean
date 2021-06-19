import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div>
             {/* header */}
             <div className="header">
                <h1 className="title">Eco Ocean</h1>
                <div className="header-options">
                    <Link to="/" className="options"><h3 >Home</h3></Link>
                    <Link to="/" className="options"><h3 className="options">Donate</h3></Link>
                    <Link to="/stories" className="options"><h3 className="options">Stories</h3></Link>
                    <Link to="/adopt" className="options"><h3 className="options">Adopt</h3></Link>
                    <Link to="/" className="options"><h3 className="options">Community</h3></Link>
                    <Link to="/" className="options"><h3 className="options">Contact Us</h3></Link>
                </div>
                <div className="basket-container">
                    <ShoppingBasketIcon className="basket" width="30px" color="white" />
                    <medium>{basket.length}</medium>
                </div>
            </div>
        </div>
    )
}

export default Header;
