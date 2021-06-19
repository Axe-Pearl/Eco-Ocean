import React from 'react'
import {useStateValue} from "./StateProvider";
import pets from "./pets";
import "./adopt.css";
function Adopt({id,image,petbreed,price}) {
    const [{ basket },dispatch]=useStateValue();
    //console.log("this is the cart>>", basket);
    const addToBasket=()=>{
       dispatch({
         type:"ADD_TO_BASKET",
         pets: {
             id:id,
             petbreed:petbreed,
             price:price
         }
       });
    }
  return (
        <div className="pet_container">
                 <div className="pet_content">
                <img className="img" src={image}></img>
                 <h3 className="breed">{petbreed}</h3>
                 <h4 className="price">₹{price}</h4>
                 <h4><a className="link" href="#"></a></h4>
                 <button className="add_to_cart" onClick={addToBasket}>Add to Cart</button>
                 </div>
         </div>
  );
 
}

export default Adopt;
