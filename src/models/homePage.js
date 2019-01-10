import { getBalance, addBalance } from '@/services/homePage'
import isSuccess from '@/utils/isSuccess'

export default {
    namespace: 'homePage',
    state: {
        // 余额
        balance: 0
    },
    effects: {
        * getBalance({ payload }, { call, put }) {
            const res = yield call(getBalance, payload)
            if(isSuccess(res)) {
                yield put({
                    type: 'changeData',
                    payload: { balance: res.data.balance }
                })
            }
        },
        * addBalance({ payload, cb }, { call, put }) {
            const res = yield call(addBalance, payload)
            if(isSuccess(res)) {
                yield put({
                    type: 'getBalance',
                    payload: { userId: "5c36e11ac76d6e15987e213b" }
                })
                cb && cb()
            }
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