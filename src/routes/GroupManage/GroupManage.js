import React from 'react'
import { connect } from 'dva'
import { Table, Button, Modal } from 'antd'

import GroupAddFrom from './GroupAddForm'

@connect(({ groupManage, friendManage }) => {
    return {
        ...groupManage,
        ...friendManage
    }
})
class GroupManage extends React.Component {
    state = {
        modalVisible: false
    }
    componentDidMount() {
        this.getGroupList()
    }
    getGroupList = () => {
        const { dispatch } = this.props
        dispatch({
            type: 'groupManage/getGroupList'
        })
    }
    createGroup = () => {
        const { groupForm: { validateFields } } = this.refs
        const { dispatch } = this.props
        validateFields((err, values) => {
            if(!err) {
                console.log(values)
                dispatch({
                    type: 'groupManage/createGroup',
                    payload: values
                })
            }
        })
    }
    exitGroup = record => {
        const { dispatch } = this.props
        const { groupId } = record
        dispatch({
            type: 'groupManage/exitGroup',
            groupId
        })
    }
    showAddModal = () => {
        this.setState({
            modalVisible: true
        })
    }
    hideAddModal = () => {
        this.setState({
            modalVisible: false
        })
    }
    render() {
        const { groupList } = this.props
        const { modalVisible } = this.state
        const columns = [
            {
                title: '组名',
                dataIndex: 'groupName'
            }, 
            {
                title: '操作',
                dataIndex: 'operator',
                render: (value, record, index) => {
                    return (
                        <Button 
                            type="danger" 
                            size="small" 
                            onClick={() => this.exitGroup(record)}
                        >
                            退出
                        </Button>
                    )
                }
            }
        ]
        return (
            <div>
                <Modal
                    destroyOnClose
                    title="创建Share组"
                    visible={modalVisible}
                    onCancel={this.hideAddModal}
                    onOk={this.createGroup}
                    okText='确认'
                    cancelText='取消'>
                    <GroupAddFrom ref="groupForm" />
                </Modal>
                <Button 
                    style={{ margin: '20px 0' }}
                    type="primary" 
                    onClick={this.showAddModal}
                >
                    新增分组
                </Button>
                <Table 
                    dataSource={groupList}
                    columns={columns}
                    rowKey="groupId"
                />
            </div>
        )
    }
}

export default GroupManage