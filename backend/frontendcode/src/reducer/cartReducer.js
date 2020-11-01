const shoppingcartdefault=[];

export default (state=shoppingcartdefault,action)=>{
switch(action.type){
    case 'ADD_TO_CART':
        return[
            ...state,
            action.item
        ]
    
    case 'REMOVE_FROM_CART':
        return state.filter((cartitems) => cartitems.id !== action.id);
    
    case 'VIEW_THE_CART':
        return action.cartItems;
    
    case 'SEARCH_THE_ITEM':
        return state.filter((cartitems)=>cartitems.productname.toLowerCase().includes(action.text.toLowerCase()));  
    
    default: 
        return state;
    }
}

 