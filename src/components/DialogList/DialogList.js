import React from 'react'
import moment from 'moment'
import { connect } from 'dva'
import { List } from 'antd'

@connect(({ homePage }) => {
    return {
        ...homePage
    }
})
class DialogList extends React.Component {
    componentDidMount() {
        const { dispatch, groupId } = this.props
        dispatch({
            type: 'homePage/getDialog',
            payload: {
                groupId
            }
        })
    }
    componentWillUnmount() {
        const { dispatch } = this.props
        dispatch({
            type: 'homePage/changeData',
            payload: { dialogList: [] }
        })
    }
    renderItem = item => {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{marginRight: 40 }}>{moment(item.datetime).format('YYYY-MM-DD HH:mm:ss')}</div>
                <div>{item.content}</div>
            </div>
        )
    }
    render() {
        const { dialogList } = this.props
        return (
            <List
                dataSource={dialogList}
                renderItem={this.renderItem}
            />
        )
    }
}

export default DialogList