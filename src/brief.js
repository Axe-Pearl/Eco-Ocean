import React from 'react'
import { useStateValue } from './StateProvider';
import Footer from "./footer";
import "./brief.css";

function Brief() {
    const [{basket,reader},dispatch] = useStateValue();
    console.log("reader",reader);
    console.log("basketp",basket);
    return (
        <div className ="brief-container">
            <div className="pet_img">
                <h1>Everything About the Breed </h1>
                <img className="image" src={reader[0].image}></img>
                <h1 className="breedo">{reader[0].petbreed}</h1>
                <h5 className="tagline">Hey Humans! Before you adopt me,let's learn about me </h5>
                <h3 className="introduction">Who I'm Exactly ?</h3>
                <p className="about_pet">{reader[0].description}</p>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Brief;
