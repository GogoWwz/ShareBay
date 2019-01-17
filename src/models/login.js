import { login } from '@/services/login'
import isSuccess from '@/utils/isSuccess'
import Storage from '@/utils/storage'
import { routerRedux } from 'dva/router'

export default {
    namespace: 'login',
    state: {

    },
    effects: {
        * login({ payload }, { call, put }) {
            const res = yield call(login, payload)
            if(isSuccess(res)) {
                yield Storage.set('user', res.data)
                yield put(routerRedux.push('/home'))
            }
        }
    },
    reducers: {}
}