import React from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { Row, Col } from 'antd';
import styles from './layouts.less';

import HomePage from '@/routes/HomePage/HomePage'
import Header from '@/components/Header/Header'

@connect()
class BasicLayout extends React.Component {
    render() {
        return (
            <Row className={styles.basiclayout}>
                <Col span={24}>
                    <Header {...this.props} />
                </Col> 
                <Col span={20}>
                    <Switch>
                        <Redirect exact from="/home" to="/home/homePage" />
                        <Route path="/home/homePage" exact component={HomePage} />
                    </Switch>
                </Col>
                <Col span={24}>
                    底部
                </Col>
            </Row>
        )
    }
}

export default BasicLayout
