import React from 'react'
import { Card, Icon, Modal } from 'antd'
import { connect } from 'dva'
import BalanceForm from './BalaceForm'
import styles from './style.less'

@connect(({ homePage }) => {
    return {
        ...homePage
    }
})
class HomePage extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            modalVisible: false
        }
    }
    componentDidMount() {
        this.getBalance()
    }
    getBalance = () => {
        this.props.dispatch({
            type: 'homePage/getBalance',
            payload: { userId: "5c36e11ac76d6e15987e213b" }
        })
    }
    addBalance = () => {
        const { balanceForm: { validateFields } } = this.refs
        const { dispatch } = this.props
        validateFields((err, values) => {
            if(!err) {
                dispatch({
                    type: 'homePage/addBalance',
                    payload: { 
                        groupId: '5c36e11ac76d6e15987e213c',
                        userId: '5c36e11ac76d6e15987e213b',
                        balance: parseFloat(values.balance)
                    },
                    cb: this.hideModal 
                })
            }
        })
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
    render() {
        const { balance } = this.props
        const { modalVisible } = this.state
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
                <Card
                    title="余额">
                    <div className={styles.moneyCount}>
                        <span>{ balance }</span>
                    </div>
                    <div className={styles.moneyOption}>
                        <div key="topup" onClick={this.showModal}>
                            <Icon type="money-collect" />
                            <span>充值</span>
                        </div>
                        <div key="takeout">
                            <Icon type="export" />
                            <span>取出</span>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
export default HomePage