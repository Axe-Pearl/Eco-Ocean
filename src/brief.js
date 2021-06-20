import React from 'react'
import { useStateValue } from './StateProvider';
import "./brief.css";

function Brief() {
    const [{basket,reader},dispatch] = useStateValue();
    console.log("reader",reader);
    console.log("basketp",basket);
    return (
        <div className ="brief-container">
            <div className="pet_img">
                <img className="image" src={reader[0].image}></img>
                <h1 className="breed">{reader[0].petbreed}</h1>
                <h5 className="tagline">Hey Humans! Before you adopt me,let's learn about me </h5>
            </div>
            <div className="description-box">
                <h3 className="introduction">Who I'm Exactly ?</h3>
                <p className="about_pet">{reader[0].description}</p>
            </div>
        </div>
    )
}

export default Brief;