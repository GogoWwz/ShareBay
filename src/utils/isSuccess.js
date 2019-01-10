import { message } from 'antd'

export default res => {
    if(res.code !== 8888 ) {
        message.warning(res.message)
        return false
    } else {
        message.success(res.message)
        return true
    }
}