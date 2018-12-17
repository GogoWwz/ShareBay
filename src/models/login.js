import { login } from '../services/login'

export default {
    namespace: 'login',
    state: {

    },
    effects: {
        * login({ payload }, { call, put }) {
            const res = yield call(login, payload)
            console.log(res)
        }
    },
    reducers: {}
}