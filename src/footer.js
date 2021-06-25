import React from 'react';
import "./footer.css";
import PetsIcon from '@material-ui/icons/Pets';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from "react-router-dom";

function Footer() {
    const date = new Date;
    const year = date.getFullYear();
    return (
        <div className="footer">
            <div className="logo-footer">
            <PetsIcon classes={{ root: 'Logo-bottom'}} style={{ fontSize: 30 }}/>&ensp;<h1>Eco-Ocean</h1>
            </div>
            <div className="copyright">
            <h4>Copyright © {year} Eco-Ocean™ Inc. Proudly made in India.</h4>
            </div>
            <div className="connect">
                <small>Connect with us:</small>
                <div className="icon-container">
                <TwitterIcon classes={{root:"icons"}} />
                <Link to="https://www.linkedin.com/in/anurag-nema-8b5569194/"><LinkedInIcon classes={{root:"icons"}} /></Link>
                <Link to="https://github.com/Axe-Pearl"><GitHubIcon classes={{root:"icons"}} /></Link>
                </div>
            </div>
        </div>
        
    )
}

export default Footer;
