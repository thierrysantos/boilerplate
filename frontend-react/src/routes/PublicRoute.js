/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
	return (
		/**
		 * A restricted route that unauthenticated user can see. To explain more,
		 * we don’t want to show the sign-in page after logged in to the site.
		 * If the authorised user goes to the sign-in page, we will redirect to
		 * dashboard page.
		 */
		<Route
			{...rest}
			render={(props) =>
				restricted /* && loggedIn */ ? (
					<Redirect to="/dashboard" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

PublicRoute.propTypes = {
	component: PropTypes.func.isRequired,
	restricted: PropTypes.bool.isRequired,
};

export default PublicRoute;
