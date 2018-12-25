import { login } from '../services/login'
import { message } from 'antd'

export default {
    namespace: 'login',
    state: {

    },
    effects: {
        * login({ payload }, { call, put }) {
            const res = yield call(login, payload)
            console.log(res)
            if(res.code === 8888) {
                message.success(res.message)
            }
        }
    },
    reducers: {}
}