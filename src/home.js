import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import QRCode from "qrcode.react";
import "./home.css";
function Home() {
    return (
        <div>
             {/* app-brief middle */}
            <div className="app-brief">
              <div className="app-intro">
                  <div className="app-aim">
                    <p className="description">Millions of Street Animals</p>
                    <p className="description">are living in bad Condition</p>
                    <p className="description">Let's help them...</p>
                    <p className="donate-line">Your Contribution matters, Express Your Soul and Donate </p>
                    <button className="donate_button" type="button" ></button>
                   </div>
                   <div className="image-container1">
                       <img className="screen" src="../Images/intro-section-image01.svg"></img>
                       <img  className="screen screen2" src="../Images/helppets.jpg"></img>
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
