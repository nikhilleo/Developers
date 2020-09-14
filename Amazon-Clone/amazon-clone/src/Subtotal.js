import React from 'react';
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';


function SubTotal() {

    const [{cart}] = useStateValue();

    var sum = 0;
    const arr = cart;
    function total(arr)
    {
    
        for(var i=0;i<arr.arr.length;i++)
        {
            sum += arr.arr[i]?.price;
        }
        return sum;
    }

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({cart?.length} items in Cart) : 
                        <strong>{value}</strong>
                    </p>

                    <p>
                        <small className="subtotal__gift">
                        
                            <input type="checkbox" />This Item Contains A Gift
                        </small>
                    </p>

                    </>
                )}
                decimalScale={2}
                value={total({arr})}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
             <button>Proceed To Checkout</button>

        </div>
    )
}

export default SubTotal
