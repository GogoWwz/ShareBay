import { login } from '@/services/login'
import { routerRedux } from 'dva/router'
import { message } from 'antd'

export default {
    namespace: 'login',
    state: {

    },
    effects: {
        * login({ payload }, { call, put }) {
            const res = yield call(login, payload)
            message.success(res.message)
            yield put(routerRedux.push('/home'))
        }
    },
    reducers: {}
}