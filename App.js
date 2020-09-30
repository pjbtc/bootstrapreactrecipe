import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Card from './Cards.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter , Route, Switch, Link,Redirect} from 'react-router-dom';
import Recipe from './Recipe';
import RecipeLayoutRoute from './RecipeLayout';
import HeaderLayoutRoute from './HeaderLayout';
import AboutLayoutRoute from './AboutLayout';
import About from './About';
import Blog from './Blog';
import Home from './Home';
import BlogLayoutRoute from './BlogLayout';
import HomeLayoutRoute from './HomeLayout';
import Recipepate from './Recipepate';
import RecipepateLayoutRoute from './RecipepateLayout';
import Recipecod from './Recipecod';
import RecipecodLayoutRoute from './RecipecodLayout';
class App extends Component {
  render() {
    return (
    	
      <div>
      <BrowserRouter>
     <Header/>
     
      <Footer/>
       
     
      <Switch>
       <Route exact path="/">  
            <Redirect to="/home" />  
          </Route>
         	<AboutLayoutRoute path ="/about" component={About}/>
       		<RecipeLayoutRoute path ="/recipe" component={Recipe}/>
       		<RecipepateLayoutRoute path="/recipepate" component={Recipepate}/>
       		<RecipecodLayoutRoute path ="/recipecod" component={Recipecod}/>
       		<BlogLayoutRoute path ="/blog" component={Blog}/>
       		<HomeLayoutRoute path="/home" component={Home}/>
       </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
