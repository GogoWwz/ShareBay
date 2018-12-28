import React from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { Row, Col } from 'antd';
import styles from './layouts.less';

import Login from '../routes/Login/Login'

@connect()
class UserLayout extends React.Component {
    render() {
        return (
            <Row className={styles.userlayout}>
                <Col xxl={4} lg={6} sm={10} xs={20}>
                    <Switch>
                        <Redirect exact from="/user" to="/user/login" />
                        <Route exact path="/user/login" component={Login} />
                    </Switch>
                </Col>
            </Row>
        )
    }
}

export default UserLayout
