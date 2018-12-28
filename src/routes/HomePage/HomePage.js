import React from 'react'
import { Card } from 'antd'
import { connect } from 'dva'
import styles from './style.less'

@connect(({ homePage }) => {
    return {
        ...homePage
    }
})
class HomePage extends React.Component {
    constructor(props) {
        super(props) 
    }
    componentWillMount() {
        this.getBalance()
    }
    getBalance = () => {
        this.props.dispatch({
            type: 'homePage/getBalance'
        })
    }
    render() {
        const { balance } = this.props
        return (
            <div className={styles.moneyArea}>
                <Card
                    title="余额">
                    <div className={styles.moneyCount}>
                        <span>{ balance }</span>
                    </div>
                </Card>
            </div>
        )
    }
}
export default HomePage