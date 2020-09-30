import React from 'react';  
import { Route } from 'react-router-dom';  
  
const RecipecodLayout = ({ children }) => (                         
    <div>  
      <p>Codroe Recipe</p>  
      {children}                                       
    </div>  
  );  
  
  const RecipecodLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <RecipecodLayout>  
            <Component {...matchProps} />  
        </RecipecodLayout>  
      )} />  
    )  
  };  
  
export default RecipecodLayoutRoute;