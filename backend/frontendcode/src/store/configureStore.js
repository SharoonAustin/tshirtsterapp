import {createStore} from 'redux';
import Cart_Reducer from '../reducer/cartReducer'

export default ()=>{
    const store=createStore(Cart_Reducer)
    return store;
}



