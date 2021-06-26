import React from 'react'
import {useStateValue} from './StateProvider';
import DeleteIcon from '@material-ui/icons/Delete';
import  { Link } from "react-router-dom";
import FlipMove from 'react-flip-move';
import "./checkout.css";

function Insert(terms){
    const [{basket},dispatch] = useStateValue(); 

    const showmore = ()=>{
        dispatch({
        type:"SHOW_MORE",
        peto:{
            id:terms.id,
            image:terms.image,
            petbreed:terms.petbreed,
            price:terms.price,
            description:terms.description
        }
        });

    }
    const removefromBasket = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            pet:{
                id:terms.id,
                image:terms.image,
                petbreed:terms.petbreed,
                price:terms.price,
                description:terms.description
            }
        });
    }
    return(
    <div className="basket_reveal">
        <div className = "image-basket">
        <img src={terms.image} className="img-pet"></img>
        </div>
        <div className="details">
        <h3 className="breed">{terms.petbreed}</h3>
        <h4 className="price">₹{terms.price}</h4>
        <div className="remove">
        <DeleteIcon onClick={removefromBasket} classes={{root:"remove_from_cart"}} style={{ fontSize: 30 }}/>
        <medium className="delete">Delete</medium>
        </div>
        <div className="description-box">
            <p className="about">{terms.description.substring(0,500)}&ensp;<Link to = "/readmore"><h5 onClick={showmore} >Read More...</h5> </Link> </p>
        </div>
        </div>
    </div>
    )
}
function Cart_checker(){
    const [{basket},dispatch] = useStateValue();
    if(basket.length == 0){
        return(
            <div className="basket_check">
                <div className="bag">
                    <img className="bag-img" src="../Images/urbag.jpg"></img>
                </div>
                <div className="bag-status">
                   <h1>OOPS ! There is no one 
                    <br></br>inside your bag 🤷‍♂️</h1>
                </div>
            </div>
        )
    }
    // else{
    //     return(
    //         <div className="bag">
    //                 <img className="bag-img" src="../Images/urbag.jpg"></img>
    //             </div>
    //     )
    // }
    return;
}
function Checkout() {
    const [{basket},dispatch] = useStateValue(); 
        console.log("basket",basket);
        return(
            <div className="checkout">
                <h1>You are Inside your bag !!</h1>
                {Cart_checker()}
           <div className="basket-pets">
           <FlipMove>
              {basket.map(Insert)}
           </FlipMove>
           </div>
        </div>
        )
}

export default Checkout;
