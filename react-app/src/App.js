import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InputValue from './components/FizzBuzz';
import FibonacciLength  from './components/FibonacciSequence';
import Combined from './components/Combined';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';

function App() {
  // const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async() => {
  //     await dispatch(authenticate());
  //     setLoaded(true);
  //   })();
  // }, [dispatch]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/FizzBuzz' exact={true}>
          <h2 className='center'>FizzBuzz</h2>
          < InputValue />
        </Route>
        <Route path='/fibonacciSequence' exact={true}>
        <h2 className='center'>fibonacciSequence</h2>
        <FibonacciLength />
        </Route>
        <Route path='/Combine-the-two' exact={true} >
        <h2 className='center'>Combine Two</h2>
        < Combined />
        </Route>
        <Route path='/' exact={true} >
          <h1 className='center'> ^^ Hello, Please click on one of the options located at the top of the page to begin ^^</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
