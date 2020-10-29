import { v4 as uuidv4 } from 'uuid'
export const addToCart=({_id=0,image='',productname='', amount= 0, size=[''], Small=0, Medium=0, Large=0, isSold='',quantity=1})=>{
    return{
        type:'ADD_TO_CART',
        item:{
            id:uuidv4(),
            _id,  
            image,
            productname,
            amount,
            size,
            Small,
            Medium,
            Large,
            isSold,
            quantity
        },
    }
    }
    
export const removeFromCart=(id)=>{
        return{
            type:'REMOVE_FROM_CART',
            id
        }
    }

export const searchTheItem=({text=''})=>{
        return{
            type:'SEARCH_THE_ITEM',
            text
        }
    }