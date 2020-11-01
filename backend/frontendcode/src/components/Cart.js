import React from 'react'
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {startRemoveFromCart} from '../actions/cart';

class Cart extends React.Component{
  state={
    totalamount:0,
    taxCharges:0,
    shippingCharges:50
  }
  componentDidMount(){
    let amount=0;
    this.props.items.map((i)=>{
      amount+=i.amount;
    })

    let taxCharges=Math.floor(amount*0.05)
    this.setState(({taxCharges}))
    this.setState(({totalamount:amount}));
  }

  removeTheItem=(item)=>{
    this.setState((prevstate)=>{
      return{
        totalamount: prevstate.totalamount-item.amount,
        taxCharges:Math.floor((this.state.totalamount-item.amount)*0.05)
      }
    })
   this.props.dispatch(startRemoveFromCart(item.id));
  }


  render(){
    return(
      <div style={{color:"#007bff"}} className="container">
<h1>Shopping Cart</h1>
<br></br>
<table className="table table-xs">
<tbody>
  <tr>
    <th></th>
    <th>Description</th>
    <th>Remove</th>
    <th className="text-right">Amount</th>
    <th className="text-right">Quantity</th>
  </tr>
 
  {this.props.items.map((item,index)=>{
    return(
      <tr key={index} className="item-row">
    <td> <img style={{width:"100px"}} src={`http://localhost:3000/static/${item.image}`}/></td>
    <td>
      <p> <strong>{item.productname}</strong></p>
      <p>Size: {item.size}</p>
    </td>
    <td title="Price"><Button variant="primary" onClick={()=>{this.removeTheItem(item)}} size="sm">Remove</Button>{' '}</td>
    <td className="text-right" title="Amount">{item.amount} ₹</td>
    <td className="text-right" title="Quantity">{item.quantity}</td>
  </tr>
    )
  })}
  {this.props.items.length>0 && 
  <tr className="total-row info">
    <td className="text-right" colSpan="4">Total</td>
    <td className="text-right">{this.state.totalamount} ₹</td>
  </tr>
}

{this.props.items.length>0 &&
  <tr className="total-row info">
    <td className="text-right" colSpan="4">Taxes@5%</td>
    <td className="text-right">{this.state.taxCharges} ₹</td>
  </tr>
}

{this.props.items.length>0 && this.state.totalamount<1000 &&
  <tr className="total-row info">
    <td className="text-right" colSpan="4">Shipping Charges</td>
    <td className="text-right">{this.state.shippingCharges} ₹</td>
  </tr>
}

{this.props.items.length>0 && this.state.totalamount<1000 &&
<tr className="total-row info">
<td className="text-right" colSpan="4">Grand Total</td>
<td className="text-right">{this.state.shippingCharges+this.state.taxCharges + this.state.totalamount} ₹</td>
</tr>
}

{this.props.items.length>0 && this.state.totalamount>1000 &&
  <tr className="total-row info">
  <td className="text-right" colSpan="4">Grand Total</td>
  <td className="text-right">{this.state.taxCharges + this.state.totalamount} ₹</td>
  </tr>
  }

{this.props.items.length>0 &&
  <tr className="total-row info">
  <td><Button className="text-right" variant="primary" size="lg">Proceed to Checkout</Button></td>
  </tr>
}
</tbody>
</table>
</div>
    )
  }
}


const mapStateToProps=((state)=>{
  return{
    items:state
  }
 
});

export default connect(mapStateToProps)(Cart);