import React from 'react'
import {useStateValue} from './StateProvider';
import DeleteIcon from '@material-ui/icons/Delete';
import "./checkout.css";

function Insert(terms){
    const [{basket},dispatch] = useStateValue(); 
    const removefromBasket = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            pet:{
                id:terms.id,
                petbreed:terms.petbreed,
                price:terms.price
            }
        });
    }
    return(
    <div className="basket_reveal">
        <div className = "image-container">
        <img src={terms.image} className="img"></img>
        </div>
        <div className="details">
        <h3 className="breed">{terms.petbreed}</h3>
        <h4 className="price">₹{terms.price}</h4>
        </div>
        <div className="remove">
        <DeleteIcon  className="remove_from_cart" onClick={removefromBasket}/>
        <medium>Delete</medium>
        </div>
        <div className="description-box">
            <h3 className="description">Description</h3>
        </div>
    </div>
    )
}
function Cart_checker(){
    const [{basket},dispatch] = useStateValue();
    if(basket.length == 0){
        return(
            <div className="basket_check">
                <h1>Hey! Your Selected pets will apppear here</h1>
            </div>
        )
    }
    return;
}
function Checkout() {
    const [{basket},dispatch] = useStateValue(); 
        console.log("basket",basket);
        return(
            <div>
                {Cart_checker()}
           <div className="basket-pets">
              {basket.map(Insert)}
           </div>
        </div>
        )
}

export default Checkout;
