import { message } from 'antd'
import { getBalance, addBalance } from '../services/homePage'

export default {
    namespace: 'homePage',
    state: {
        // 余额
        balance: 0
    },
    effects: {
        * getGroup({}, { call, put }) {
            const res = yield call(getBalance, { username: 'wuweizhen' })
            yield put({
                type: 'changeData',
                payload: { balance: res.data.balance }
            })
        },
        * addBalance({ payload, cb }, { call, put }) {
            const res = yield call(addBalance, payload)
            yield put({
                type: 'getGroup'
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