import React from 'react';
import {Route} from 'react-router-dom';


const ProtectedRoute = ({component: Component , ...rest}) => {
    // if(localStorage.getItem('')){}
    return (
       
          <Route {...rest} render={
      props => <Component {...rest} {...props} />
    } />
    
    )
}

export default ProtectedRoute;
