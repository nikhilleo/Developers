import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'



function Product({ id ,title , price , image , rating}) {
   
    const [{cart}, dispatch] = useStateValue();

    console.log("This Is Cart:",cart[0]?.price + cart[1]?.price);

    const addToCart = () =>{
        dispatch({
            type:"ADD_TO_CART",
            item : {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        });
    };

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

            <button onClick={addToCart}>Add To Cart</button>
        </div>
    )
}

export default Product
