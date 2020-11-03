import {Link, NavLink} from 'react-router-dom';
import React from 'react'
import MenuBar from '../components/MenuBar'
import {connect} from 'react-redux';
import {startLogin,startLogout} from '../actions/auth';
import Button from 'react-bootstrap/Button';


class Header extends React.Component{
    constructor(props){
    super(props);
 
    this.state={
        status: false
    }
}

     componentDidMount(){
        this.setState({status:this.props.uid.uid==undefined?false:true})
    } 

    render(){
        return(
            <div className="header">
            <Link to="/"><div className="imageHelper">
            </div>
            </Link>
            <MenuBar/>
            {this.state.status==false 
            ?
            <div className="header-button">
            <Button variant="outline-primary" onClick={this.props.startLogin}>Login</Button>{' '}
            <Button variant="outline-primary"><span className="dot">0</span> Cart</Button>{' '}
            </div>
            :
            <div className="header-button">
            <Button variant="outline-primary" onClick={this.props.startLogout}>Logout</Button>{' '}
            <Link to="/Cart"><Button variant="outline-primary"><span className="dot">{this.props.item.length}</span> Cart</Button>{' '}</Link> 
            </div>
        }
            </div> 
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        item:state.cart,
        uid:state.auth
    }
}

const mapDispatchToProps=(dispatch)=>({
    startLogout:()=>dispatch(startLogout()),
    startLogin:()=>dispatch(startLogin())
})


export default connect(mapStateToProps,mapDispatchToProps)(Header);