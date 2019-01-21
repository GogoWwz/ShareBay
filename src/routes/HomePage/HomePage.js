import React from 'react'
import { Card, Icon, Modal, Drawer, Select } from 'antd'
import { connect } from 'dva'
import styles from './style.less'
import BalanceForm from './BalaceForm'
import TakeBalanceForm from './TakeBalanceForm'
import DialogList from '@/components/DialogList/DialogList'

const Option = Select.Option

@connect(({ homePage }) => {
    return {
        ...homePage
    }
})
class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            takeModalVisible: false,
            dialogVisible: false,
            selectedGroup: 'allGroup'
        }
    }
    componentDidMount() {
        this.getBalance()
        this.getGroupList()
    }
    getBalance = () => {
        const { selectedGroup } = this.state
        this.props.dispatch({
            type: 'homePage/getBalance',
            payload: { groupId: selectedGroup }
        })
    }
    addBalance = () => {
        const { balanceForm: { validateFields } } = this.refs
        const { dispatch } = this.props
        const { selectedGroup } = this.state
        validateFields((err, values) => {
            if (!err) {
                dispatch({
                    type: 'homePage/addBalance',
                    payload: {
                        groupId: selectedGroup,
                        balance: parseFloat(values.balance)
                    },
                    cb: this.hideModal
                })
            }
        })
    }
    takeBalance = () => {
        const { takeBalanceForm: { validateFields } } = this.refs
        const { dispatch } = this.props
        const { selectedGroup } = this.state
        validateFields((err, values) => {
            if (!err) {
                const { balance, dialog } = values
                dispatch({
                    type: 'homePage/takeBalance',
                    payload: {
                        groupId: selectedGroup,
                        balance: parseFloat(balance),
                        dialog
                    },
                    cb: this.hideTakeModal
                })
            }
        })
    }
    getGroupList = () => {
        const { dispatch } = this.props
        dispatch({
            type: 'homePage/getGroupList'
        })
    }
    setGroup = value => {
        this.setState({
            selectedGroup: value
        }, () => {
            this.getBalance()
        })
    }
    renderExtra = () => {
        const { groupList } = this.props
        return (
            <Select
                defaultValue="allGroup"
                onChange={(value, option) => this.setGroup(value, option)}>
                <Option key="allGroup" value="allGroup">所有Share</Option>
                {
                    groupList &&
                    groupList.map(item => {
                        return (
                            <Option key={item.groupId} value={item.groupId}>
                                {item.groupName}
                            </Option>
                        )
                    })
                }
            </Select>
        )
    }
    showModal = () => {
        this.setState({
            modalVisible: true
        })
    }
    hideModal = () => {
        this.setState({
            modalVisible: false
        })
    }
    showTakeModal = () => {
        this.setState({
            takeModalVisible: true
        })
    }
    hideTakeModal = () => {
        this.setState({
            takeModalVisible: false
        })
    }
    showDialog = () => {
        this.setState({
            dialogVisible: true
        })
    }
    hideDialog = () => {
        this.setState({
            dialogVisible: false
        })
    }
    render() {
        const { balance } = this.props
        const { modalVisible, takeModalVisible, dialogVisible, selectedGroup } = this.state
        return (
            <div className={styles.moneyArea}>
                <Modal
                    destroyOnClose
                    visible={modalVisible}
                    onOk={this.addBalance}
                    onCancel={this.hideModal}
                    title="充值余额"
                    cancelText="取消"
                    okText="充值"
                >
                    <BalanceForm ref="balanceForm" />
                </Modal>
                <Modal
                    destroyOnClose
                    visible={takeModalVisible}
                    onOk={this.takeBalance}
                    onCancel={this.hideTakeModal}
                    title="取出金额"
                    cancelText="取消"
                    okText="确认"
                >
                    <TakeBalanceForm ref="takeBalanceForm" />
                </Modal>
                <Drawer
                    destroyOnClose
                    width={500}
                    closable={false}
                    visible={dialogVisible}
                    onClose={this.hideDialog}>
                    <DialogList groupId={selectedGroup} />
                </Drawer>
                <Card
                    title="余额"
                    extra={this.renderExtra()}>
                    <div className={styles.moneyCount}>
                        <span>{balance}</span>
                    </div>
                    <div className={styles.moneyOption}>
                        {
                            selectedGroup !== 'allGroup' &&
                            <div key="topup" onClick={this.showModal}>
                                <Icon type="money-collect" />
                                <span>充值</span>
                            </div>
                        }
                        <div key="dialog" onClick={this.showDialog}>
                            <Icon type="profile" />
                            <span>日志</span>
                        </div>
                        {
                            selectedGroup !== 'allGroup' &&
                            <div key="takeout" onClick={this.showTakeModal}>
                                <Icon type="export" />
                                <span>取出</span>
                            </div>
                        }
                    </div>
                </Card>
            </div>
        )
    }
}
export default HomePage