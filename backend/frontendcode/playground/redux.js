import {createStore} from 'redux';
import { v4 as uuidv4 } from 'uuid';

const addToCart=({productname='', amount= 0, size='', isSold=true})=>{
return{
    type:'ADD_TO_CART',
    item:{
        id: uuidv4(),
        productname,
        amount,
        size,
        isSold
    }
}
}

const removeFromCart=(id)=>{
    return{
        type:'REMOVE_FROM_CART',
        id
    }
}

const searchTheItem=({text=''})=>{
    return{
        type:'SEARCH_THE_ITEM',
        text
    }
}

const shoppingcartdefault=[];

const Cart_Reducer=(state=shoppingcartdefault,action)=>{
switch(action.type){

    case 'ADD_TO_CART':
        return[
            ...state,
            action.item
        ]
    
    case 'REMOVE_FROM_CART':
        return state.filter((cartitems) => cartitems.id !== action.id) 
    
    case 'SEARCH_THE_ITEM':
        return state.filter((cartitems)=>cartitems.productname.toLowerCase().includes(action.text.toLowerCase()))
    
    default: 
        return state;
    }
}

const store=createStore(Cart_Reducer)

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(addToCart({productname:'Pink T-shirt', amount:100, size:'Small', isSold:false}));
store.dispatch(addToCart({productname:'Black T-shirt', amount:200, size:'XLarge', isSold:false}));
store.dispatch(addToCart({productname:'Green T-shirt', amount:300, size:'Large', isSold:false}));

//store.dispatch(removeFromCart(item1.item.id));
store.dispatch(searchTheItem({text:'Green T-shirt'}));