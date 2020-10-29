import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import {addToCart, removeFromCart,searchTheItem} from './actions/cart'
import AppRouter from './routers/AppRouter'
import '../styles/styles.scss';
const store=configureStore();

store.subscribe(()=>{
    console.log(store.getState());
})

//store.dispatch(searchTheItem({text:'Black T-shirt'}));

const jsx=(
<Provider store={store}>
    <AppRouter />
</Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));
