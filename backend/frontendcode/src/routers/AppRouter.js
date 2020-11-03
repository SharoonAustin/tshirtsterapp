import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import React from 'react'
import Header from '../components/Header';
import DashBoardPage from '../components/Dashboard'
import Cart from '../components/Cart'
import Footer from '../components/Footer';
import MenSection from '../components/Men';
import WomenSection from '../components/Women';
import Return from '../components/Return'
import MenProductView from '../components/MenProductView'
import WomenProductView from '../components/WomenProductView'
import LoginForm from '../components/LoginForm';

export const history= createHistory();

const AppRouter=()=>
    (
    <Router history={history}>
    <div>
    <Header/>
    <Switch>
    <Route path="/" component={DashBoardPage} exact={true} />
    <Route path="/Cart" component={Cart} />
    <Route path="/Men" component={MenSection}/>
    <Route path="/Women" component={WomenSection}/>
    <Route path="/Return" component={Return}/>
    <Route path="/MenProduct/:id" component={MenProductView}/>
    <Route path="/WomenProduct/:id" component={WomenProductView}/>
    <Route path="/Login" component={LoginForm} />
    </Switch>
    <Footer/>
    </div>
    </Router>
)
 export default AppRouter;