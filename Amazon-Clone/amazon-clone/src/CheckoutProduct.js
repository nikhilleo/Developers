import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider"

function CheckoutProduct({id,image,title,price,rating}) {
    
    const [{cart}, dispatch] = useStateValue();

    
    const removeFromCart = () =>{
        alert("removed")
        dispatch({
            type:"REMOVE_FROM_CART",
            title:title
        });
    }

    return (
        <div className="checkoutproduct">

            <img className="checkoutproduct__image" src={image} alt="" />            

            <div className="checkoutprodut__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price">
                    <span>$</span>
                    <span>{price}</span>
                </p>
                <div className="checkoutproduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>✯</p>
                    ))}
                </div>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
