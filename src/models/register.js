import { register } from '@/services/register'
import { routerRedux } from 'dva/router'
import { message } from 'antd'

export default {
    namespace: 'register',
    state: {

    },
    effects: {
        * register({ payload }, { call, put }) {
            const res = yield call(register, payload)
            message.success(res.message)
            yield put(routerRedux.push("/user/login"))
        }
    },
    reducers: {}
}