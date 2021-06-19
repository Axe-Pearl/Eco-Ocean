import React from 'react'
import Adopt from "./adopt";
import pets from "./pets";
import "./adoptback.css";
function insert(terms){
    return(
        <Adopt id={terms.id} image={terms.image} petbreed={terms.petbreed} price={terms.price} />
    )
}
function Adoptback() {
    return (
        <div className="adopt_container">
            <div>{pets.map((insert))}</div>
        </div>
    )
}

export default Adoptback;
