import {Link, NavLink} from 'react-router-dom';
import React from 'react'
const MenuBar=()=>(
    <div className="MenuBar">
    <NavLink style={{textDecoration:'None'}} to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <Link style={{textDecoration:'None'}} className="MenuBarButton" to="/Men">Men</Link>
    <Link style={{textDecoration:'None'}} className="MenuBarButton" to="/Women">Women</Link>
    </div>
    )
export default MenuBar