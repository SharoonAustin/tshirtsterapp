import React from 'react'
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {startRemoveFromCart} from '../actions/cart';
import {startLogin} from '../actions/auth';

class Cart extends React.Component{
  constructor(props){
    super(props)
    let amount=0;
    let quantity=0;
        props.items.map((i)=>{
        quantity=i.quantity;
        amount+=i.amount;
      })
    this.state={
      totalamount:amount,
      taxCharges:Math.floor(amount*0.05),
      shippingCharges:50,
      status:false
    }
  }
  
  componentDidMount(){
    this.setState({status:this.props.uid.uid==undefined?false:true})
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
{
this.state.status==true 
?
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
:
<input style={{backgroundColor:"#007bff", color:"white"}} type="button" onClick={()=>{this.props.dispatch(startLogin())}} className="btn" value="Login"></input>

}
</div>
)
    
  }
}


const mapStateToProps=((state)=>{
  return{
    items:state.cart,
    uid:state.auth
  }
 
});

export default connect(mapStateToProps)(Cart);