import React from 'react'
import "./Product.css"



function Product({title , price , image , rating}) {
    return (
        <div className="product">
           <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>$ </strong>
                    <strong>{price}</strong>
                </p>
                
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>✯</p>
                    ))}
                    
                </div>

                <img className="product__verified" src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" />
                
            </div> 
            
            


            <img src={image} alt="" />

            <button>Add To Cart</button>
        </div>
    )
}

export default Product
