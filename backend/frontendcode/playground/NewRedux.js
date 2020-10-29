import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from 'redux';
import axios from 'axios';


const allMenProduct=({id=0, image='', productname='', amount=0, size='',isSold='',quantity=0})=>{
    return{
        type:'FETCH_MAN_ITEMS',
        item:{
            id,
            image,
            productname,
            amount,
            size,
            isSold,
            quantity
        }
    }
}

const MenProducts=[];

const Men_Reducer=(state=MenProducts,action)=>{
switch(action.type){
    case 'FETCH_MAN_ITEMS':
        return[
            ...state,
            action.item
        ]
}
}

const store=createStore(Men_Reducer)

store.subscribe(()=>{
    console.log(store.getState());
})

axios.get("http://localhost:3000/getData")
.then(response => {
response.data.forEach((item) => {
store.dispatch(allMenProduct(item));
});
})
