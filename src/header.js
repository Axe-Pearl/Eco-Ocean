import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PetsIcon from '@material-ui/icons/Pets';
import EcoIcon from '@material-ui/icons/Eco';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
    const [{basket,reader},dispatch]=useStateValue();
    return (
        <div>
             {/* header */}
             <div className="header">
                <Link to="/" className="linkero"><h1 className="title"><PetsIcon classes={{ root: 'Logo'}} style={{ fontSize: 30 }}/>Eco Ocean</h1></Link> 
                <div className="header-options">
                    <Link to="/" className="options"><h3 className="options">HOME</h3></Link>
                    <Link to="/" className="options"><h3 className="options">DONATE</h3></Link>
                    <Link to="/stories" className="options"><h3 className="options">STORIES</h3></Link>
                    <Link to="/adopt" className="options"><h3 className="options">ADOPT</h3></Link>
                    <Link to="/" className="options"><h3 className="options">COMMUNITY</h3></Link>
                    <Link to="/" className="options"><h3 className="options">CONTACT US</h3></Link>
                </div>
                <div className="basket-container">
                    <Link to="/checkout"><ShoppingBasketIcon classes={{ root: 'basket'}} style={{ fontSize: 30 }} /></Link>
                    <medium>{basket.length}</medium>
                </div>
            </div>
        </div>
    )
}

export default Header;
