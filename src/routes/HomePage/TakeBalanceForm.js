import React from 'react'
import { Form, InputNumber, Input } from 'antd'
import styles from './style.less'

const FormItem = Form.Item
const { TextArea } = Input

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
                <FormItem {...formLayout} label="取出金额">
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
                <FormItem {...formLayout} label="用处说明">
                    {
                        getFieldDecorator('dialog', {
                            rules: [
                                { required: true, message: "请输入取出说明" },
                            ],
                            validateTrigger: 'onBlur'
                        })(
                            <TextArea placeholder="请输入取出说明" />
                        )
                    }
                </FormItem>
            </Form>
        )
    }
}

export default BalanceForm