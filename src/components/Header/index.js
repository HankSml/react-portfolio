import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';

class Header extends Component {   
    render() {
    return (
        <HashRouter>
            <div className="row Header" id="header">
                <Navigation/>
            </div>
            <div className="content">
            <Route exact path="/" render={() => (<Redirect to="/portfolio"/>)}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            </div>
    </HashRouter>
    )
}
}

export default Header;