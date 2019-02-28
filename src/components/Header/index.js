import React from 'react'

import { Menu } from 'antd'
import { Link } from 'dva/router'
import styles from './style.less'
const MenuItem = Menu.Item

class Header extends React.Component {
    render() {
        const { location: { pathname } } = this.props
        return (
            <Menu
                selectedKeys={[pathname]}
                className={styles.headerMenu}
                mode="horizontal">
                <MenuItem key="/home/homePage">
                    <Link to="/home/homePage">首页</Link>
                </MenuItem>
                <MenuItem key="/group/groupManage">
                    <Link to="/group/groupManage">Share群</Link>
                </MenuItem>
                <MenuItem key="/friend/friend">
                    <Link to="/friend/friend">好友列表</Link>
                </MenuItem>
                <MenuItem key="/home/account">
                    <Link to="/home/account">账号管理</Link>
                </MenuItem>
            </Menu>
        )
    }
}

export default Header