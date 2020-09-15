

export const initialState = {
    cart : []
}


const reducer = (state,action) =>{
    console.log(action);
    switch (action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cart : [...state.cart , action.item],
            };

            
        case "REMOVE_FROM_CART":
            {
                var index = state.cart.findIndex((cart) => cart.title === action.title);


                console.log(index);


                var newarr = [];


                if (index >= 0) {
                    for(var i = 0;i<state.cart?.length;i++)
                    {
                        if(i!=index)
                        {
                            newarr.push(state.cart[i]);
                        }
                    }
                }
                else{

                    console.log("No Product Found")

                }

                return {
                    ...state,
                    cart:newarr  
                };
            }
        default:
        return state;
    }
     
}

export default reducer;