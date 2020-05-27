import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import About from './pages/About';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Product from './pages/Product';
import TermsAndConditions from './pages/TermsAndConditions';
import './utils/utility-classes.css';
import FavoriteList from './pages/FavoriteList';

function App() {
  return(
    <div className="app">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/about" component={About}/>
        <Route path="/favorites" component={FavoriteList}/>
        <Route path ="/terms-and-conditions" component={TermsAndConditions}/>
        <Route path="/category/:categoryName" component={Category}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
