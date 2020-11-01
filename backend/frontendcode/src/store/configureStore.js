import {createStore,applyMiddleware,compose} from 'redux';
import Cart_Reducer from '../reducer/cartReducer'
 import thunk from 'redux-thunk';

 const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
 
export default ()=>{
    const store=createStore(Cart_Reducer,
        composeEnhancers(applyMiddleware(thunk))
    )
    return store;
}
