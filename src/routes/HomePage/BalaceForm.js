import React from 'react'
import { Form, InputNumber } from 'antd'
import styles from './style.less'

const FormItem = Form.Item

@Form.create()
class BalanceForm extends React.Component {
    render() {
        const { form: { getFieldDecorator } } = this.props
        const formLayout = {
            labelCol: {
                xs: 24,
                md: 4
            },
            wrapperCol: {
                xs: 24,
                md: 20
            }
        }
        return (
            <Form className={styles.balanceForm}>
                <FormItem {...formLayout} label="充值金额">
                    {
                        getFieldDecorator('balance', {
                            rules: [
                                { required: true, message: "请输入金额" },
                            ],
                            validateTrigger: 'onBlur'
                        })(
                            <InputNumber placeholder="请输入" precision={2} />
                        )
                    }
                </FormItem>
            </Form>
        )
    }
}

export default BalanceForm