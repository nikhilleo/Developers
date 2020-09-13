import React from 'react'
import Product from "./Product"
import { useStateValue } from './StateProvider';

function Cart() {

    const [{cart}, dispatch] = useStateValue();
    const arr = cart;
    console.log(arr);
    return (
        <div>
            <Product 
                    title={arr[0]?.title} 
                    rating={arr[0]?.rating}
                    price={arr[0]?.price} 
                    image={arr[0]?.image} 
            />
        </div>
    )
}

export default Cart
