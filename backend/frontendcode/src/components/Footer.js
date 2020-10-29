import React from 'react'
import {NavLink ,Link} from 'react-router-dom';

const Footer=()=>(
    <footer style={{display:"flex",justifyContent:"space-between"}}>
    <NavLink to="/" activeClassName="is-active" exact={true}>Back To Home Page</NavLink>
    <Link to="/Return">Returns and Orders</Link>
    </footer>
)

export default Footer;