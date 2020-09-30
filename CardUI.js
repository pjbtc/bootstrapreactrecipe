import React from 'react';
import img1 from './assets/pate2.jpg';
import "./card-style.css";
import Recipe from './Recipe';
import RecipeLayoutRoute from './RecipeLayout';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

const Card =props=>{
	return(	
				
				<div className='cardtext-center shadow'>
		<div className='overflow'>
			<img src={props.imgsrc} style={{width:'200px', height:'150px'}}alt='Image1' className="card-img-top"/>
			</div>
			<div className="card-body text-dark">
			<h4 className="card-title">{props.title}</h4>
			<p className="card-text text-secondary">
			  Recipe
			  </p>
			 

			  
			  </div>
			  </div>

			
		

			
	 			
			   
			  
			  );
	
};
export default Card;