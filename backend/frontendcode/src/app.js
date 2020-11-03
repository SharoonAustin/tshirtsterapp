import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import {startViewTheCart} from './actions/cart'
import {login,logout} from './actions/auth'

import AppRouter from './routers/AppRouter'
import '../styles/styles.scss';
import {firebase} from '../Firebase/firebase'
import Header from './components/Header'
const store=configureStore();

//store.dispatch(searchTheItem({text:'Black T-shirt'}));

const jsx=(
<Provider store={store}>
    <AppRouter />
</Provider>
)


const renderApp=()=>{
ReactDOM.render(jsx,document.getElementById('app'));
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startViewTheCart()).then(()=>{
            ReactDOM.render(<p>Loading...</p>,document.getElementById('app'))
            renderApp();
        })
    }
    else{
        store.dispatch(logout());
        ReactDOM.render(<p>Loading...</p>,document.getElementById('app'))
        renderApp();
    }
})

