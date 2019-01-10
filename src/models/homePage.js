import { message } from 'antd'
import { getBalance, addBalance } from '../services/homePage'

export default {
    namespace: 'homePage',
    state: {
        // 余额
        balance: 0
    },
    effects: {
        * getBalance({ payload }, { call, put }) {
            const res = yield call(getBalance, payload)
            yield put({
                type: 'changeData',
                payload: { balance: res.data.balance }
            })
        },
        * addBalance({ payload, cb }, { call, put }) {
            const res = yield call(addBalance, payload)
            yield put({
                type: 'getBalance',
                payload: { userId: "5c36ba802f534c1bf805a269" }
            })
            message.success(res.message)
            cb && cb()
        }
    },
    reducers: {
        changeData(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        }
    }
}