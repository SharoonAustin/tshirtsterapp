import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import Cart_Reducer from '../reducer/cartReducer'
import Auth_Reducer from '../reducer/auth'
import thunk from 'redux-thunk';

 const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
 
export default ()=>{
    const store=createStore(
        combineReducers({
        cart:Cart_Reducer,
        auth:Auth_Reducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    )
    return store;
}
