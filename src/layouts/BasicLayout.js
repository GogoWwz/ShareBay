import React from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { Row, Col, Spin } from 'antd';
import styles from './layouts.less';

import HomePage from '@/routes/HomePage/HomePage'
import GroupManage from '@/routes/GroupManage/GroupManage'
import FriendManage from '@/routes/FriendManage/FriendManage'
import Account from '@/routes/Account/Account'
import Header from '@/components/Header/Header'

@connect(({ loading }) => {
    return {
        loading: loading['global']
    }
})
class BasicLayout extends React.Component {
    render() {
        const { loading } = this.props
        return (
            <Row className={styles.basiclayout}>
                <Col span={24}>
                    <Header {...this.props} />
                </Col> 
                <Col span={20}>
                    <Spin spinning={loading}>
                        <Switch>
                            <Redirect exact from="/home" to="/home/homePage" />
                            <Route path="/home/homePage" exact component={HomePage} />
                            <Route path="/group/groupManage" exact component={GroupManage} />
                            <Route path="/friend/friend" exact component={FriendManage} />
                            <Route path='/home/account' exact component={Account} />
                        </Switch>
                    </Spin>
                </Col>
                <Col span={24}>
                    底部
                </Col>
            </Row>
        )
    }
}

export default BasicLayout
