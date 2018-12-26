import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './layouts.less';

@connect()
class BasicLayout extends React.Component {
    render() {
        const { children } = this.props;
        console.log(children)
        return (
            <Row className={styles.basiclayout}>
                <Col span={24}>
                    公共顶部。。。。。
                </Col>
                <Col span={20} offset={2}>
                    {children}
                </Col>
                <Col span={24}>
                    公共底部。。。。
                </Col>
            </Row>
        )
    }
}

export default BasicLayout
