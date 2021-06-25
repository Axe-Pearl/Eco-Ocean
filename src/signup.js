import React from "react";
import { Link } from "react-router-dom";
import PetsIcon from '@material-ui/icons/Pets';
import "./signup.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
function Signup(){
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
                 <img  className="img" src="../Images/donatethem.jpg"></img>
                </div>
                <div className="app-tag">
                    <p className="tag quote">
                       Let's Come Together
                       
                    </p>
                    <p className="tag">
                    Help them to get a good life.
                    </p>
                </div>
                <div className="connect-us">
                <small>Connect with us:</small>
                <div className="icon-container">
                <TwitterIcon classes={{root:"icons-ani"}} />
                <Link to="https://www.linkedin.com/in/anurag-nema-8b5569194/"><LinkedInIcon classes={{root:"icons-ani"}} /></Link>
                <Link to="https://github.com/Axe-Pearl"><GitHubIcon classes={{root:"icons-ani"}} /></Link>
                </div>
            </div>
       </div>

       <div className="signup-container">
           <h1>Sign In</h1>
           <div className="signup-form">
               <label className="labels" for="email">Email</label>
               <input className="input-fields" type="text" placeholder="ram@example.com"></input>

               <label className="labels" for="email">Password</label>
               <input className="input-fields" type="password" placeholder="password"></input>

               <button className="btn" type="submit">SIGN IN</button>
               <p className="signin-line">Don't have an account ?&ensp; <a className="linkit" href="#">Sign In</a></p>
           </div>
       </div>
       </div>
    );
}

export default Signup;