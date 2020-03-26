import React from 'react';
import { useTranslation } from 'react-i18next';

function Login() {
	const { t } = useTranslation();
	return <h1>{t('Login.welcome')}</h1>;
}

Login.propTypes = {};

export default Login;
