import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import animal from './Data/data.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import NotPound from './components/NotPound/NotPound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
       <Header></Header>
      <Router>
         <Switch>
            <Route path="/shop">
               <Shop></Shop>
            </Route>
            <Route path="/order">
                <Review></Review>
            </Route>
            <Route path="/manage">
                <Manage></Manage>
            </Route>
            <Route exact path="/">
               <Shop></Shop>
            </Route>
             <Route path="/product/:productKey">
                <ProductDetails></ProductDetails>
             </Route>
            <Route path="*">
                 <NotPound></NotPound>
            </Route>
         </Switch>
      </Router>
      
    </div>
  );
}

export default App;
