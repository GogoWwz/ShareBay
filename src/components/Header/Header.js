import React from 'react'

import { Menu } from 'antd'
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
                <MenuItem key="/home/homePage">首页</MenuItem>
                <MenuItem key="/home/groupManage">Share群</MenuItem>
                <MenuItem key="/account">账号</MenuItem>
            </Menu>
        )
    }
}

export default Header