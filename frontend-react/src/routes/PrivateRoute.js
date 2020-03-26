/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ component: Component, ...rest }) {
	return <Route {...rest} render={(props) => <Component {...props} />} />;
}

PrivateRoute.propTypes = {
	component: PropTypes.func.isRequired,
};

export default PrivateRoute;
