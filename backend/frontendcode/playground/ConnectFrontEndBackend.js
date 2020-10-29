import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';

class WomenCollection extends React.Component{
    state={
        items:[],
    }

    componentDidMount(){
        axios.get('http://localhost:3000/getData')
        .then(response=>{
            this.setState({items:response.data});
        })
    }
    
    render() {
        /* return (<div>
        {this.state.items.map((item, index) => (
            <p key={item._id}>Hello, {item.amount} from {item.size}!</p>
        ))}
        </div>) */
        
        return (<div>
            <section className="products">
            {this.state.items.map((item, index) => (
                <div key={item._id}>
                <div className="product-card">
                <div className="product-image">
                  <img src={`http://localhost:3000/static/${item.image}`}></img>
                </div>
                <div className="product-info">
                  <div className="card__title">{item.productname}</div>
                  <h3>{item.amount} ₹</h3>
                  <button className="btn btn--block">Add to cart</button>
                </div>
                </div>
                </div>
            ))}
            </section>
            </div>)
    }
}

 
ReactDOM.render(<AddToCartPage />,document.getElementById('app'));




/* const WomenCollection=(props)=>(
    <section className="products">    
                {props.Items.map((products)=>{
                    return(
                        <div className="product-card">
                        <div className="product-image">
                          <img src="/images/Black-Tshirt.jpg"></img>
                        </div>
                        <div className="product-info">
                          <div className="card__title">{products.productname}</div>
                          <h3>{products.amount} ₹</h3>
                          <button onClick={temp(products)} className="btn btn--block">Add to cart</button>
                        </div>
                        </div>                
                    )
                })}
                </section>
         )
const temp=(products)=>{
    console.log(products)
}
const mapStateToProps=state=>{
    return{
        Items:state
    }
}

export default connect(mapStateToProps)(WomenCollection)
 */
