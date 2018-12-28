import React from 'react';
import { Router, Switch, Redirect, Route } from 'dva/router';
import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';

// import routerData from './common/menu'

function RouterConfig({ history }) {
	return (
		<Router history={history}>
			<Switch>
				<Redirect exact from="/" to="/user" />
				<Route path="/user" render={props => <UserLayout {...props} />} />
				<Route path="/home" render={props => <BasicLayout {...props} />} />
			</Switch>
		</Router>
	);
}

export default RouterConfig;
