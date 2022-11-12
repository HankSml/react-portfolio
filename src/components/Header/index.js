import React from 'react';
import {Route, Routes, Navigate, HashRouter} from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume'

function Header () {   
    return (
        <HashRouter>
            <div className="row Header" id="header">
                <Navigation/>
            </div>
            <Routes>
                <Route exact path="/" render={() => (<Navigate to="/portfolio"/>)}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/resume" element={<Resume />}/>
            </Routes>
        </HashRouter>
    )
}

export default Header;