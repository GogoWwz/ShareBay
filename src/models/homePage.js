import * as homeApi from '@/services/homePage'
import isSuccess from '@/utils/isSuccess'
import Storage from '@/utils/storage'
// import { USER_ID } from '@/utils/globalVariable'

export default {
    namespace: 'homePage',
    state: {
        // 余额
        balance: 0,
        // 日志列表
        dialogList: [],
        // 所在群列表
        groupList: []
    },
    effects: {
        * getBalance({ payload }, { call, put }) {
            const res = yield call(homeApi.getBalance, { userId: Storage.get('user').userId, ...payload })
            if(isSuccess(res)) {
                yield put({
                    type: 'changeData',
                    payload: { balance: res.data.balance }
                })
            }
        },
        * addBalance({ payload, cb }, { call, put }) {
            const res = yield call(homeApi.addBalance, { userId: Storage.get('user').userId, ...payload })
            if(isSuccess(res)) {
                yield put({
                    type: 'getBalance',
                    payload
                })
                cb && cb()
            }
        },
        * takeBalance({ payload, cb }, { call, put }) {
            const res = yield call(homeApi.takeBalance, { userId: Storage.get('user').userId, ...payload })
            if(isSuccess(res)) {
                yield put({
                    type: 'getBalance',
                    payload
                })
                cb && cb()
            }
        },
        * getDialog({ payload }, { call, put }) {
            const res = yield call(homeApi.getDialog, { userId: Storage.get('user').userId, ...payload })
            if(isSuccess(res)) {
                yield put({
                    type: 'changeData',
                    payload: { dialogList: res.data || [] }
                })
            }
        },
        * getGroupList({}, { call, put }) {
            const res = yield call(homeApi.getGroupList, { userId: Storage.get('user').userId })
            if(isSuccess(res)) {
                yield put({
                    type: 'changeData',
                    payload: { groupList: res.data || [] }
                })
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