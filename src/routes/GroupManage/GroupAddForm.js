import React from 'react'

import {
    Form, Input, Select
} from 'antd'
import { connect } from 'dva';

const FormItem = Form.Item
const Option = Select.Option

@Form.create()
@connect(({ friendManage }) => {
    return {
        ...friendManage
    }
})
class GroupAddForm extends React.Component {
    componentDidMount = () => {
        this.getFriendList()
    }
    getFriendList = () => {
        const { dispatch } = this.props
        dispatch({
            type: 'friendManage/getFriendList'
        })
    }
    render() {
        const { form: { getFieldDecorator }, friendList } = this.props
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
                    getFieldDecorator('groupMembers', {
                        rules: [
                            { required: 'true', message: '请输入组员' }
                        ],
                        validateTrigger: 'onBlur'
                    })(
                        <Select
                            mode='multiple'
                            placeholder="请输入" 
                        >
                            {
                                friendList.length &&
                                friendList.map(item => {
                                    return (
                                        <Option key={item.userId} value={item.userId}>{item.username}</Option>
                                    )
                                })
                            }
                        </Select>
                    )
                }
                </FormItem>
            </Form>
        )
    }
}

export default GroupAddForm