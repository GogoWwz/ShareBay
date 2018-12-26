import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Login from './routes/Login/Login'
import Home from './routes/Home/Home'

function RouterConfig({ history }) {
	return (
		<Router history={history}>
			<Switch>
				<Redirect exact from="/" to="/login" />
				<Route path="/login" exact component={Login} />
				<Route path="/home" exact component={Home} />
			</Switch>
		</Router>
	);
}

export default RouterConfig;
