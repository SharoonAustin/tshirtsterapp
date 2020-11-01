import database from '../../Firebase/firebase'

    export const addToCart = (item) => ({
        type: 'ADD_TO_CART',
        item
      });
      
    export const startAddToCart = (cartData = {}) => {
        return (dispatch) => {
          const {
            _id=0,
            image='',
            productname='', 
            amount= 0, 
            size=[''], 
            Small=0,
            Medium=0, 
            Large=0, 
            isSold='',
            quantity=1} = cartData;
          const expense = {_id, image, productname, amount, size, Small, Medium, Large, isSold, quantity};
         

          return database.ref('cartItems').push(expense).then((ref) => {
            dispatch(addToCart({
                id: ref.key,
                ...expense
            }));
          });
        };
      };

export const removeFromCart=(id)=>{
        return{
            type:'REMOVE_FROM_CART',
            id
        }
    }

export const startRemoveFromCart=(id)=>{
  return(dispatch)=>{
    database.ref(`cartItems/${id}`).remove().then(()=>{
      dispatch(removeFromCart(id));
    })
  }
}    

export const viewTheCart=(cartItems)=>({
    type: 'VIEW_THE_CART',
    cartItems
})

export const startViewTheCart=()=>{
    return(dispatch)=>{
        return database.ref('cartItems').once('value').then((snapshot)=>{
            const cartItems=[];
            snapshot.forEach((childSnapshot) => {
                cartItems.push({
                  id: childSnapshot.key,
                  ...childSnapshot.val()
                });
              });
            dispatch(viewTheCart(cartItems));
        })
    }
}

export const searchTheItem=({text=''})=>{
        return{
            type:'SEARCH_THE_ITEM',
            text
        }
    }