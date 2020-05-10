/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface IProps {
  component: React.FC;
  rest: Record<string, any>;
}
const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  ...rest
}: IProps) => {
  return (
    <Route {...rest} render={(props: RouteProps) => <Component {...props} />} />
  );
};

export default PrivateRoute;
