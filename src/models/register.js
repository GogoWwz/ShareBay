import { register } from '@/services/register'
import isSuccess from '@/utils/isSuccess'
import { routerRedux } from 'dva/router'

export default {
    namespace: 'register',
    state: {

    },
    effects: {
        * register({ payload }, { call, put }) {
            const res = yield call(register, payload)
            if(isSuccess(res)) {
                yield put(routerRedux.push("/user/login"))
            }
        }
    },
    reducers: {}
}