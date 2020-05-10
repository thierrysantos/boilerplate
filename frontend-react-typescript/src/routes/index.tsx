import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'pages/Login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Suspense fallback="Loading...">
        <Route exact path="/" component={Login} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
