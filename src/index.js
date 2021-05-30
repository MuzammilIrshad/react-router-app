import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './project/Home';
import './project/home.css';
import GlobalProvider from './project/Reducer';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Product from './project/Product';
import Cart from './project/Cart';
import Navbar from './project/Navbar';

ReactDOM.render(
    <>
      <GlobalProvider>
            <Router>
                <Navbar />
                <Switch>
               <Route exact path="/">
                    <Home />
               </Route>
                <Route path="/Product">
                     <Product />
                </Route>
                  <Route path="/Cart">
                    <Cart />
                    </Route>
              
                </Switch>
        </Router>
      </GlobalProvider>
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
