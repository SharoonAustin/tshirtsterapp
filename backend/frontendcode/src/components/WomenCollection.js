import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {startAddToCart} from '../actions/cart';
import {startLogin} from '../actions/auth';

class WomenCollection extends React.Component{
    state={
        items:[],
        status: false
    }


    componentDidMount(){
        axios.get('https://tshirtster.herokuapp.com/getWomenData')
        .then(response=>{
            this.setState({items:response.data});
        })
     this.setState({status:this.props.uid.uid==undefined?false:true})

    }

    dispatchTheProduct=(e)=>{
        this.props.dispatch(startAddToCart({...e,size:['Small'],quantity:1}))
        this.props.history.push('/')
    }
    
    render() {
  
        return (<div>
            <section className="products">
            {this.state.items.map((item, index) => (
                <div key={item._id} className="product-card">
                <Link to={`/WomenProduct/${item._id}`}>
                <div className="product-image">
                  <img src={`https://tshirtster.herokuapp.com/static/${item.image}`}></img>
                </div>
                </Link>
                <div className="product-info">
                <div className="card__title">{item.productname}</div>
                <h3>{item.amount} ₹</h3>
                {this.state.status==false 
                  ?
                <input style={{backgroundColor:"#007bff", color:"white"}} type="button" onClick={this.props.startLogin} className="btn btn--block" value="Login"></input>
                  :
                  <input style={{backgroundColor:"#007bff", color:"white"}} type="button" onClick={()=>{this.props.startAddToCart(item)}} className="btn btn--block" value="Add to Cart"></input>
              }
                </div>
              </div>
          ))}
          </section>
          </div>)
    }
}

const mapStateToProps=((state)=>{
    return{
      items:state.cart,
      uid:state.auth
    }
  });

  const mapDispatchToProps=(dispatch)=>({
    startLogin:()=>dispatch(startLogin()),
    startAddToCart:(e)=>dispatch(startAddToCart({...e,size:['Small'],quantity:1}))
})

export default connect(mapStateToProps,mapDispatchToProps)(WomenCollection)