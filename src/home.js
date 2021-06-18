import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import "./home.css";
function Home() {
    return (
        <div>
            {/* header */}
            <div className="header">
                <h1 className="title">Eco Ocean</h1>
                <div className="header-options">
                    <Link to="/" className="options"><h3 >Home</h3></Link>
                    <Link to="/" className="options"><h3 className="options">Donate</h3></Link>
                    <Link to="/" className="options"><h3 className="options">Stories</h3></Link>
                    <Link to="/" className="options"><h3 className="options">Community</h3></Link>
                    <Link to="/" className="options"><h3 className="options">Contact Us</h3></Link>
                </div>
                {/* app-brief middle */}
           
            </div>
            <div className="app-brief">
              <img className="poster-img" src="../Images/app-poster1.jpg"></img>
              <div className="app-intro">
                  <medium className="quote">' Vasudev Kutumbkam '</medium> 
                  <p className="quote-mean">The Whole Universe is our Family</p>
              </div>
            </div>
        </div>
    )
}

export default Home
