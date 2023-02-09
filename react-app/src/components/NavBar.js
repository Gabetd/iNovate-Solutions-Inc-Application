
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className='navBar'>
        <div>
          <NavLink to='/FizzBuzz' exact={true} activeClassName='active'>
          <span className='newButton'>FizzBuzz</span>
          </NavLink>
        </div>
        <div>
          <NavLink to='/fibonacciSequence' exact={true} activeClassName='active'>
          <span className='newButton'>fibonacciSequence</span>
          </NavLink>
        </div>
        <div>
          <NavLink to='/Combine-the-two' exact={true} activeClassName='active'>
            <span className='newButton'>Combine the two</span>
          </NavLink>
        </div>
        </div>
    </nav>
  );
}

export default NavBar;
