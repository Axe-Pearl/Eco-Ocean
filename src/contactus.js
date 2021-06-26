import React from "react";
import { Link } from "react-router-dom";
import PetsIcon from '@material-ui/icons/Pets';
import "./contactus.css";
function Contactus(){
    return(
       <div>
        <div className="sign-up">
                <Link to="/" className="homepage"><h1 className="webname"><PetsIcon classes={{ root: 'logo-icon'}} style={{ fontSize: 30 }}/>Eco Ocean</h1></Link> 
                <div className="app-tag">
                    <p className="tag quote">
                        "VASUDEV KUTUMBKAM"
                       
                    </p>
                    <p className="tag">
                    The Whole World is our Family
                    </p>
                </div>
                <div className="image-animals">
                 <img  className="img" src="../Images/contact.jpg"></img>
                </div>
                <div className="app-tag">
                    <p className="tag quote">
                       Let's Come Together
                       
                    </p>
                    <p className="tag">
                    Help them to get a good life.
                    </p>
                </div>
       </div>

       <div className="signup-container">
           <div className="signup-form">
           <h1 className="title-c">Contact Us</h1>
           <label className="labels" for="name">Name</label>
               <input className="input-fields" type="text" placeholder="Fullname"></input>
               <label className="labels" for="email">Email</label>
               <input className="input-fields" type="text" placeholder="ram@example.com"></input>

               <label className="labels" for="message">Message</label>
               <textarea className="input-fields" type="password" placeholder="Your Message" />

               <button className="btn" type="submit">Submit</button>
           </div>
       </div>
       </div>
    );
}

export default Contactus;