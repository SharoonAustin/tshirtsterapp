import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {startAddToCart} from '../actions/cart';

class MenCollection extends React.Component{
    state={
        items:[],
    }

    componentDidMount(){
        axios.get('http://localhost:3000/getMenData')
        .then(response=>{
            this.setState({items:response.data});
        })
    }
    
    dispatchTheProduct=(e)=>{
        const arr={...e,size:['Small'],quantity:1};
        this.props.dispatch(startAddToCart(arr))
        this.props.history.push('/')
     }
    
    render() {  
        return (<div>
            <section className="products">
            {this.state.items.map((item, index) => (
                <div key={item._id} className="product-card">
                <Link to={`/MenProduct/${item._id}`}>
                <div className="product-image">
                  <img src={`http://localhost:3000/static/${item.image}`}></img>
                </div>
                </Link>
                <div className="product-info">
                  <div className="card__title">{item.productname}</div>
                  <h3>{item.amount} ₹</h3>
                  <input style={{backgroundColor:"#007bff", color:"white"}} type="button" onClick={()=>{this.dispatchTheProduct(item)}} className="btn btn--block" value="Add to Cart"></input>
                </div>
                </div>
            ))}
            </section>
            </div>)
    }
}

export default connect()(MenCollection)

