import React from 'react'
import { useStateValue } from './StateProvider';

function Brief() {
    const [{basket,reader},dispatch] = useStateValue();
    console.log("reader",reader);
    console.log("basketp",basket);
    return (
        <div className ="brief-container">
            <div className="pet_img">
                <img src={reader[0].image}></img>
                <h1>{reader[0].breedname}</h1>
            </div>
            <div className="description-box">
                <p>{reader[0].description}</p>
            </div>
        </div>
    )
}

export default Brief;
