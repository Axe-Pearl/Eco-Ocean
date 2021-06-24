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
                    <button className="signup_button" type="button" >SIGNUP</button>
                   </div>
                   <div className="image-container1">
                       <img className="screen" src="../Images/intro-section-image01.svg"></img>
                       <img  className="screen screen2" src="../Images/helppets.jpg"></img>
                   </div>
              </div>
            </div>
            <div className="container">
                <div className="image-section">
                <img className="image" src="../Images/adopt.jpg"></img>
                </div>
                <div className="why-section">
                    <h4 className="why-title">
                        Why you should <br></br>Adopt them ?
                    </h4>
                    <div className="why">
                    <p >Adopting pets are amazing !!Not only it
                      <br></br> helps them but there are numerous profits to have a pet.
                      <br></br>Having pets decreases stress and loneliness
                      <br></br>at great level,there are several researches 
                      <br></br>that proves how it lowers several mental,physcial illness
                      <br></br> and cares your heart ❤️. 
                      <br></br> <a href="https://www.humanesociety.org/resources/top-reasons-adopt-pet" className="linker"></a> </p>
                    </div>
                    
                </div>
            </div>
            <div className="container">
                <div className="why-section2">
                    <h4 className="why-title2">
                        Is your pet Lazy, Unactive or
                      <br></br> not friendly? Don't Worry!
                    </h4>
                    <div className="why2">
                    <p >Just like humans pets can also feel lazy 
                        <br></br>or even depressed,there can be many possible reasons
                        <br></br>-age,diet,routine can be possible common reasons,
                        <br></br>a good diet,morning/evening walk,having 
                        <br></br>good dog friends can heal them.<br></br> <a href="https://petdogowner.com/why-is-my-dog-so-lazy/" className="linker"></a> </p>
                    </div>
                </div>
                <div className="image-section2">
                    <img className="image" src="../Images/lazy_dog.jpg"></img>
                </div>
            </div>

            <div className="container">
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
            <div className="why-section2">
                    <h4 className="why-title2">
                        Have more Questions ?
                      <br></br> Scan QRCode to Know more and download pdf!
                    </h4>
                    <div className="why2">
                    <p >You can read a well defined guide here,<br></br>
                    whether you want to know everything
                    <br></br> about pets,our mission or
                    <br></br> Condition of street animals around the India.</p>
                    </div>
                </div>
            <div className="image-section2 image-container">
                <img className="image" src="../Images/askme.jpg"></img>
            </div>
            </div>
        </div>
    )
}

export default Home
