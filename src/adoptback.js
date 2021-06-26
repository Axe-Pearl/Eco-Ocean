import React from 'react'
import Adopt from "./adopt";
import pets from "./pets";
import Footer from "./footer";
import "./adoptback.css";

function insert(terms){
    return(
        <Adopt id={terms.id} image={terms.image} petbreed={terms.petbreed} price={terms.price} description={terms.description} />
    )
}
function Adoptback() {
    return (
        <div className="adopt_container">
             <div className="app-brief">
              <div className="app-intro">
                  <div className="app-aim">
                    <p className="description">World's Cheapest and </p>
                    <p className="description">Cutest Pets,Adopt them </p>
                    <p className="description">as your child.</p>
                    <p className="donate-line">Love them, they never break your Heart ❤️</p>
                    <button className="donate_button" type="button" ></button>
                    {/* <Link to="/signup"><button className="signup_button" type="button" >SIGNUP</button></Link>  */}
                   </div>
                   <div className="image-container2">
                       <img className="adopted" src="../Images/adopting.jpg"></img>
                   </div>
              </div>
            </div>
            <h1 className="and">Adopt them at reliable price</h1>
            <div className="motto">
                <h2 className="whyadopt">Why to adopt them from here ?</h2>
                <p className="motive">All street animals who were abandoned by their masters,
                <br></br>because they seems burden for them or living their life in hell,we shelter them.
                <br></br><strong>Note- </strong>All these pets are as calm as pets in shop,we train them here,inject them
                <br></br>against diseases.They are cute and calm.</p>
            </div>
            <h1 className="and" >Happy Meeting !! Keep your love in your Bag 👜</h1>
            <div>{pets.map((insert))}</div>
            <div className="footer fitit">
                <Footer />
            </div>
        </div>
    )
}

export default Adoptback;
