export const initialState = {
    basket: [{id: "81232908",
    image: "https://m.media-amazon.com/images/I/51yQGgYD4mS._AC_SL1000_.jpg",
    price: 9.99,
    rating: 4,
    title: "Tuwejia USB Type-C to HDMI Adapter"
},
{id: "81232908",
    image: "https://m.media-amazon.com/images/I/51yQGgYD4mS._AC_SL1000_.jpg",
    price: 9.99,
    rating: 4,
    title: "Tuwejia USB Type-C to HDMI Adapter"
},

],
    user: null,

};

export const getBasketTotal = (basket) => basket?.reduce((amount,item)=> item.price + amount, 0);

const reducer = (state,action)=>{
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
            // Logic for adding items to basket
            return{
                ...state,
                basket:[...state.basket, action.item],
            };
            
        case "REMOVE_FROM_BASKET" :
            //Logic for removing items from basket

            //clone the basket
            let newBasket = [...state.basket];
            //check if the product exists
            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id);
            //if index is true
            if(index >= 0){
                //item basket exists in basket, remove it
                newBasket.splice(index, 1);
                
            }
            else{
                console.warn('Cant remove product (id: action.id) as it not exists.');
            }
            return{
                ...state,
                basket:newBasket
            };
            
        default:
            return state;
    }
}
/*allows reducer to be used outside of this class*/
export default reducer;