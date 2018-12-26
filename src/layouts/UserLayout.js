import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './layouts.less';

@connect()
class UserLayout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <Row className={styles.userlayout}>
                <Col xxl={4} lg={6} sm={10} xs={20}>
                    {children}
                </Col>
            </Row>
        )
    }
}

export default UserLayout
