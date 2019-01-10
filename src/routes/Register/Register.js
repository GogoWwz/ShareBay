import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button } from 'antd';

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
                dispatch({
                    type: 'register/register',
                    payload: values 
                })
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
                <FormItem>
                    {getFieldDecorator('username', {
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
                    <div>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            注册
                        </Button>
                    </div>
                </FormItem>
            </Form>
        )
    }
}

export default connect()(Login);
