import React from 'react';
import {NavLink} from "react-router-dom";

export const Navigation = (props) => {   
    return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to="/about" className="card-link">About </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="card-link">Portfolio </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="card-link">Contact </NavLink>
          </li>
        </ul>
      </div>
      <h1 className='my-name'>Harrison</h1>
    </nav>
  );
}

export default Navigation;