import React from 'react';
import { Route } from 'react-router-dom';
import PrivateLayout from '../Layouts/PrivateLayout/PrivateLayout';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(mathProps) => (
      <PrivateLayout>
        <Component {...mathProps} />
      </PrivateLayout>
    )}
  />
);
export default PrivateRoute;
