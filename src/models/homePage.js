import { getBalance } from '../services/homePage'

export default {
    namespace: 'homePage',
    state: {
        // 余额
        balance: 0
    },
    effects: {
        * getBalance({ payload }, { call, put }) {
            console.log("1111")
            const res = yield call(getBalance, { username: 'wuweizhen' })
            yield put({
                type: 'changeData',
                payload: { balance: res.data.balance }
            })
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