import React from 'react'

import {
    Form, Input, Select
} from 'antd'

const FormItem = Form.Item
const Option = Select.Option

@Form.create()
class GroupAddForm extends React.Component {
    render() {
        const { form: { getFieldDecorator } } = this.props
        return (
            <Form hideRequiredMark>
                <FormItem label="组名">
                {
                    getFieldDecorator('groupName', {
                        rules: [
                            { required: 'true', message: '请输入组名' }
                        ],
                        validateTrigger: 'onBlur'
                    })(
                        <Input placeholder="请输入" />
                    )
                }
                </FormItem>
                <FormItem label="组内成员">
                {
                    getFieldDecorator('groupMemebers', {
                        rules: [
                            { required: 'true', message: '请输入组员' }
                        ],
                        validateTrigger: 'onBlur'
                    })(
                        <Select
                            mode='multiple'
                            placeholder="请输入" 
                        >
                            <Option key="v1" value="v1">选项1</Option>
                            <Option key="v2" value="v2">选项2</Option>
                            <Option key="v3" value="v3">选项3</Option>
                            <Option key="v4" value="v4">选项4</Option>
                        </Select>
                    )
                }
                </FormItem>
            </Form>
        )
    }
}

export default GroupAddForm