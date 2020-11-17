import React from 'react'
/* import ExpenseList from './ExpenseList'*/
import {Link} from 'react-router-dom';

const DashBoardPage=()=>(
    <div className="MyDashBoardContainer">
    <Link to="/Men"><img className="MyDashBoardimg" src="/Men.jpg"></img></Link>
    <br></br>
    <Link to="/Women"><img className="MyDashBoardimg" src="/Women1.jpg"></img></Link>
    </div>
);

export default DashBoardPage
