import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import QRCode from "qrcode.react";
import "./home.css";
function Home() {
    return (
        <div>
             {/* app-brief middle */}
            <div className="app-brief">
              <img className="poster-img" src="../Images/app-poster1.jpg"></img>
              <div className="app-intro">
                  <medium className="quote">' Vasudev Kutumbkam '</medium> 
                  <p className="quote-mean">The Whole Universe is our Family</p>
                  <div className="app-aim">
                    <p className="description">Millions of Street Animals</p>
                    <p className="description">are living in bad Condition</p>
                    <p className="description">Let's help them...</p>
                    <button className="donate_button" type="button" ></button>
                   </div>
              </div>
            </div>
            <div className="learn-more">
                <div className="qrcode">
                    <img  src="../Images/cellphone.jpg"></img>
                    <div className="code">
                       <QRCode
                        id="1234"
                        value="Sample QRCode"
                        size={160}
                        level={"H"}
                        includeMargin={true}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
