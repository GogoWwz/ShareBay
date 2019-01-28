import React from 'react'
import { connect } from 'dva'
import {
    Button, Input, List
} from 'antd'
import styles from './style.less'

const Search = Input.Search

@connect(({ friendManage }) => {
    return {
        ...friendManage
    }
})
class FriendManage extends React.Component {
    componentDidMount() {
        this.getFriendList()
        this.getWaitFriendList()
        this.getNewFriendList()
    }
    getFriendList = () => {
        const { dispatch } = this.props
        dispatch({
            type: 'friendManage/getFriendList'
        })
    }
    getNewFriendList = () => {
        const { dispatch } = this.props
        dispatch({
            type: 'friendManage/getNewFriendList'
        }) 
    }
    getWaitFriendList = () => {
        const { dispatch } = this.props
        dispatch({
            type: 'friendManage/getWaitFriendList'
        })
    }
    searchUser = value => {
        const { dispatch } = this.props
        dispatch({
            type: 'friendManage/findUser',
            username: value
        })
    }
    addFriend = () => {
        const { dispatch } = this.props
        dispatch({
            type: 'friendManage/addFriend'
        })
    }
    acceptFriend = acceptId => {
        const { dispatch } = this.props
        dispatch({
            type: 'friendManage/acceptFriend',
            acceptId
        })
    }
    renderNewList = item => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 5 }}>
                <span>{item.username}</span>
                <div>
                    <Button type="primary" size="small" onClick={() => this.acceptFriend(item.userId)}>同意</Button>
                    <Button type="danger" size="small" style={{ marginLeft: 10 }}>拒绝</Button>
                </div>
            </div>
        )
    }
    renderWaitList = item => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 5 }}>
                <span>{item.username}</span>
            </div>
        )
    }
    renderFriendList = item => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 5 }}>
                <span>{item.username}</span>
            </div>
        )
    }
    render() {
        const { pickedUser, waitFriendList, newFriendList, friendList } = this.props
        return (
            <div>
                <div className={styles.fontTt}>添加好友</div>
                <div className={styles.addFriend}>
                    <Search
                        placeholder="请输入好友名称"
                        onSearch={this.searchUser}
                    />
                    <div>
                        {
                            pickedUser &&
                            (
                                <div className={styles.userArea}>
                                    <span>{pickedUser.username}</span>
                                    <Button type="primary" size="small" onClick={this.addFriend}>添加</Button>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className={styles.fontTt}>待确认列表</div>
                <List
                    size="small"
                    bordered
                    dataSource={waitFriendList}
                    renderItem={this.renderWaitList}
                />
                <div className={styles.fontTt}>新的朋友</div>
                <List
                    size="small"
                    bordered
                    dataSource={newFriendList}
                    renderItem={this.renderNewList}
                />
                <div className={styles.fontTt}>好友列表</div>
                <List
                    size="small"
                    bordered
                    dataSource={friendList}
                    renderItem={this.renderFriendList}
                />
            </div>
        )
    }
}

export default FriendManage