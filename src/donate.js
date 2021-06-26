import React from 'react'
import "./donate.css";
import Footer from "./footer";

function Donate() {
    return (
        <div>
            <div className="donate-container">
                <div className="donate-head">
                <img src="../Images/donatepic2.jpg" className="image-donate"></img>
                </div>
                <div className="donate-para">
                <h1 className="doescription-donate">Your Donation Matters !!</h1>
                    <p className="title-donate">
                       Every Contribution is Priceless,it can save
                       <br></br>a life and can help animals to overcome from hell
                       <br></br>Over millions of street Animals are in India,
                       <br></br>many of them living a life of Hell.
                       <br></br>Let's give your hand to them.
                    </p>
                  </div>
            </div>

            {/* donation-from */}
            <div className="form-containero">
                <div className="header-form">
                <img className="form-image" src="../Images/donatepic4.jpg"></img>
                </div>
           <div className="signup-formo">
               <h1 className="d-title">Donate</h1>
           <label className="labels" for="name">Name</label>
               <input className="input-fields" type="text" placeholder="Fullname"></input>
               <label className="labels" for="email">Email</label>
               <input className="input-fields" type="text" placeholder="ram@example.com"></input>

               <label className="labels" for="message">Mobile no.:</label>
               <input className="input-fields" type="tel" placeholder="9876543210"></input>
                <div className="amount-box">
                    <label className="amount-label">Amount: </label>
                    <input className="amount" type="number" placeholder="Rupees"></input>
                </div>
                <div className="btn-donate">
               <button className="btn" type="submit">Submit</button>
               </div>
           </div>
       </div>
       {/* join as superhero(community) */}
            <div className="donate-container">
                <div className="donate-para">
                <h1 className="description-donate">Be the SuperHeroes</h1>
                    <p className="title-donate">
                       Join us and become one of superhero
                       <br></br>a life and can help animals to overcome from hell
                       <br></br>Over millions of street Animals are in India,
                       <br></br>many of them living a life of Hell.
                       <br></br>Let's give your hand to them.
                    </p>
                </div>
                <div className="donate-head">
                <img src="../Images/superheros.jpg" className="image-donate"></img>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Donate;
