import React from 'react'
import "./Checkout.css"
import SubTotal from "./SubTotal"

function Checkout() {
    return (
        <div className="checkout">
            
            <div className="checkout__left">
                <img className="checkout__ad" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" 
                alt="" />

                <h2 className="checkout__title">Your Shopping Cart</h2>

               
            </div>


            <div className="checkout__right">
                    <SubTotal />
            </div>

        </div>
    )
}

export default Checkout
