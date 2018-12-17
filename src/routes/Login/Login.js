import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import styles from './style.less';

const FormItem = Form.Item

@Form.create()
@connect(({ login }) => {
    return {
        ...login
    }
})
class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                dispatch({
                    type: 'login/login',
                    payload: values 
                })
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row className={styles['login-form']}>
                <Col xxl={4} lg={6} sm={10} xs={20}>
                    <Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <div>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </div>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default connect()(Login);
