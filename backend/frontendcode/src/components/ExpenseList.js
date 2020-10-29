import React from 'react';
import { connect } from 'react-redux';

const ExpenseList=(props)=>(
<div>
<h1>Expense List</h1>
{props.name.map((products)=>{
    return(
        <h2>{products.productname}</h2>
    )
})}
</div>
);

const ConnectedExpenseList=connect((state)=>{
    return{
        name:state
    }
})(ExpenseList);


export default ConnectedExpenseList;