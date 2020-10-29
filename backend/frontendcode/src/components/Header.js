import {Link, NavLink} from 'react-router-dom';
import React from 'react'
import MenuBar from '../components/MenuBar'
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';

const Header=(props)=>(
    <div className="header">
    <Link to="/"><div className="imageHelper">
    </div>
    </Link>
    <MenuBar/>
    <div className="header-button">
    <Link to="/Login"><Button variant="outline-primary">Login</Button>{' '}</Link>
    <Link to="/Cart"><Button variant="outline-primary"><span className="dot">{props.item.length}</span> Cart</Button>{' '}</Link>
    </div>
    </div> 
)

const mapStateToProps=connect((state)=>{
    return{
        item:state
    }
})(Header)

export default mapStateToProps;