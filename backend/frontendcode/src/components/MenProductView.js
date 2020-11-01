import React from 'react';
import axios from 'axios';
import {startAddToCart} from '../actions/cart';
import {connect} from 'react-redux';

class MenProductView extends React.Component{
state={
    item:{},
    price:0,
    quantity:'1'
}

componentDidMount(){
    axios.get(`http://localhost:3000/getMenData/${this.props.match.params.id}`)
    .then(response=>{
       this.setState({item:response.data});
       this.setState({price:response.data.amount});
     })
     }

/* onQuantityChange=(e)=>{
    const quan=e.target.value;
    const amount=quan*this.state.item.amount;
    console.log(amount)
    this.setState({price:amount})
} */

onQuantity=(e)=>{
    const quantity=e.target.value;
    if(quantity<=5 && quantity>0){
    const price=quantity*this.state.item.amount;
    this.setState(()=>({price}))
    this.setState(()=>({quantity}))
    }
}

dispatchTheProduct=()=>{
    const sizeSelected=document.querySelector('#sizeSelected').value;
    const quantity=document.querySelector('#quantityOfTheItem').value;
    const price=this.state.item.amount*quantity
    const newSelection = { ...this.state.item, size:[sizeSelected], amount:price, quantity:quantity}; 
    this.props.dispatch(startAddToCart(newSelection))
    }
    
    render(){
        let arr=[];
        if (this.state.item.size) {
           this.state.item.size.map((element)=>{
            if(this.state.item[element]>0){
              arr.push(element);
            }
           })
        }
    
      return(
         <section className="product">
        <div className="item-image-parent">
            <div className="item-image-main">
                <img src={`http://localhost:3000/static/${this.state.item.image}`} alt="default"></img>
            </div>
        </div>
    
        <div className="item-info-parent">
            <div className="main-info">
           
            <h2>{this.state.item.productname}</h2>
            
                <p id="priceOfTheItem">Price: <span className="price">{this.state.price} ₹</span></p>
            </div>
            <div className="select-items">
                <div className="change-size">
                    <label id="size"><b>Size:</b></label>&nbsp; &nbsp;
                        <select id="sizeSelected">
                        {arr.map((element)=>( 
                            <option key={element}>{element}</option>
                        ))}  
                            
                        </select> 
                        &nbsp; &nbsp;
                        <input id="quantityOfTheItem" type="number" min="1" max="5" value={this.state.quantity} onChange={this.onQuantity} ></input>
                </div>
                <br></br>
                <div className="description">
                    <ul>
                        <li>Care Instructions: Machine Wash</li>
                        <li>Fit Type: Classic Fit</li>
                        <li>Material: Cotton</li>
                        <li>Pattern: Solid</li>
                    </ul>
                </div>
            </div>
            <input style={{backgroundColor:"#007bff", color:"white"}} type="button" onClick={this.dispatchTheProduct} className="btn" value="Buy"></input>
            &nbsp; &nbsp;
            <input style={{backgroundColor:"#007bff", color:"white"}} type="button" onClick={this.dispatchTheProduct} className="btn" value="Add to Cart"></input>
        </div>
    </section> 
    )
        }
    }
     
export default connect()(MenProductView)

