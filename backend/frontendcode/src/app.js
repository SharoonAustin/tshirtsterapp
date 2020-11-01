import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import {startViewTheCart} from './actions/cart'
import AppRouter from './routers/AppRouter'
import '../styles/styles.scss';
const store=configureStore();

//store.dispatch(searchTheItem({text:'Black T-shirt'}));

const jsx=(
<Provider store={store}>
    <AppRouter />
</Provider>
)

ReactDOM.render(<p>Loading...</p>,document.getElementById('app'))
store.dispatch(startViewTheCart()).then(()=>{
ReactDOM.render(jsx,document.getElementById('app'));
})
