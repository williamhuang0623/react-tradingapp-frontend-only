import React from 'react';
import ReactDOM from "react-dom";

import Home from "./Home";
import Account from "./Account";
import Bots from "./Bots";
import Support from "./Support";
import Fees from "./Fees";
import ForgotPassword from "./ForgotPassword";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
        <HashRouter className="hashrouter">
          <div>
            <ul className="navbar">
                {/* Home is substituted with Cypher icon */}
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/bots">Bots</NavLink></li>
                <li><NavLink to="/fees">Fees</NavLink></li>
                <li><NavLink to="/support">Support/FAQ</NavLink></li>
                <li><NavLink to="/account">Account</NavLink></li>
            </ul>
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                    <h1></h1>
                </div>
                <div className="col-md-9">
                  <Route exact path="/" component={ Home }/>
                  <Route path="/bots" component={ Bots }/>
                  <Route path="/fees" component={ Fees }/>
                  <Route path="/support" component={ Support }/>
                  <Route path="/account" component={ Account }/>
                  <Route path="/forgotpassword" component={ ForgotPassword } />
                </div>
            </div>
            </div>
          </div>
        </HashRouter>
    );
  } 
}

export default Main;
