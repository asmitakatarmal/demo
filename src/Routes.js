import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import {
 Post as PostView
} from './View/ProductCard';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        component={PostView}
        exact
        from="/"
        to="/post"
      />

    </Switch>
  );
};

export default Routes;
