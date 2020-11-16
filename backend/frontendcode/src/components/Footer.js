import React from 'react'
import {NavLink ,Link} from 'react-router-dom';

const Footer=()=>(
    <div>
    <footer style={{display:"flex",justifyContent:"space-between"}}>
    <NavLink to="/" activeClassName="is-active" exact={true}>Back To Home Page</NavLink>
    <Link to="/Return">Returns and Orders</Link>
    </footer>
    </div>
)

export default Footer;