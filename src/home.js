import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import QRCode from "qrcode.react";
import Footer from "./footer";
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
                    <Link to="/signup"><button className="signup_button" type="button" >SIGNUP</button></Link> 
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

            <div className="containerqr">
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
                      <br></br> Scan QRCode to Know more and <br></br>download pdf!
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

            <div className="mission">
            <div>
                    <h4 className="mission-title">
                       OUR MISSION
                    </h4>
                    <div className="about-mission">
                    <p>There are Millions of street Animals in India, many of them are relinquished by their masters because
                        <br></br> they seems no more important to them,they are living in very bad condition,
                        <br></br>they die or do suffer whole life,by accident,starvation or by eating polythenes or plastics
                        <br></br>all we earn by donation or selling pets,we serves street animals,
                        <br></br>our mission is to help each and every animal in India
                        <br></br>We rescue street Animals and transform them to be ready as pet 🐶</p>
                    </div>

              <div className="container">
                <div className="image-section">
                <img className="image" src="../Images/report1.jpg"></img>
                </div>
                <div className="why-section">
                    <h4 className="why-title">
                        All we need is <br></br>to care
                    </h4>
                    <div className="why">
                    <p className="why">According to one report of Times of India,
                    <br></br> 1,000 cows die every year in Lucknow after eating polythene,
                    <br></br> in post-mortem reports 50-55kg of polythene is found in stomach of street cows. 
                    <br></br>They die in too much pain.This is the shameful act of humans
                    <br></br> still there is no remorse  </p>
                    </div>
                    
                </div>
                </div>
                </div>
            </div>

         <div className="meet">
         <h4 className="mission-title">
                       Jab We Met
                    </h4>
            <div className="container-work">
                <div className="our-work">
                    <div className="image-work">
                <img className="image-works" src="../Images/rescue1.jpg"></img>
                </div>
                    <div className="story">
                        <h2>'Sakshi Singh' & her dog 'Hero'</h2>
                    <p className="words">"I never thought street dogs can be <br></br>so calm and lovely, he is very intelligent
                    <br></br>,thanks <strong>ECO-OCEAN</strong> for meeting my dog <strong>HERO </strong>"</p>
                    </div>
                    
                </div>

                <div className="our-work">
                    <div className="image-work">
                <img className="image-works" src="../Images/customer1.jpg"></img>
                </div>
                    <div className="story">
                    <h2>'Emma Malhotra' & her cat 'Teena'</h2>
                    <p className="words">"She was shy at first but cute and lovely <br></br>from early,she 
                    was already got injections<br></br> from <strong>ECO-OCEAN</strong>
                    ,my life changed after having
                    <br></br> <strong>Teena</strong> with me."</p>
                    </div>
                    
                </div>

                <div className="our-work">
                    <div className="image-work">
                <img className="image-works" src="../Images/customer3.jpg"></img>
                </div>
                <div className="story">
                    <h2>'Rashmi' & her dog 'Sheroo'</h2>
                    <p className="words">"Love that I saved his life<br></br> and he make my life better, 
                    <br></br>thanks <strong>ECO-OCEAN</strong>,for having <strong>Sheroo</strong> with me."</p>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home
