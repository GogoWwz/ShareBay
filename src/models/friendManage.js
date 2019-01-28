import * as friendApi from '@/services/friend'
import * as userApi from '@/services/user'
import isSuccess from '@/utils/isSuccess'
import Storage from '@/utils/storage'
// import { USER_ID } from '@/utils/globalVariable'

export default {
    namespace: 'friendManage',
    state: {
        // 好友列表
        friendList: [],
        // 查找的好友
        pickedUser: null,
        // 待确认好友列表
        waitFriendList: [],
        // 新好友列表
        newFriendList: []
    },
    effects: {
        * getFriendList({}, { call, put }) {
            const res = yield call(friendApi.getFriendList, { userId: Storage.get('user').userId })
            if(isSuccess(res)) { 
                yield put({
                    type: 'changeData',
                    payload: { friendList: res.data || [] }
                })
            }
        },
        * findUser({ username }, { call, put }) {
            const res = yield call(userApi.findUser, { username })
            if(isSuccess(res)) {
                yield put({
                    type: 'changeData',
                    payload: { pickedUser: res.data }
                })
            }
        },
        * addFriend({}, { call, put, select }) {
            const userTwoId = yield select(state => {
                return state.friendManage.pickedUser.userId
            })
            const res = yield call(friendApi.addFriend, { userOneId: Storage.get('user').userId, userTwoId })
            if(isSuccess(res)) {
                yield put({
                    type: 'changeData',
                    payload: { pickedUser: null }
                })
                yield put({
                    type: 'getWaitFriendList'
                })
            }
        },
        * getWaitFriendList({}, { call, put }) {
            const res = yield call(friendApi.getWaitFriendList, { userId: Storage.get('user').userId })
            if(isSuccess(res)) {
                yield put({
                    type: 'changeData', 
                    payload: { waitFriendList: res.data || [] }
                })
            }
        },
        * getNewFriendList({}, { call, put }) {
            const res = yield call(friendApi.getNewFriendList, { userId: Storage.get('user').userId })
            if(isSuccess(res)) {
                yield put({
                    type: 'changeData', 
                    payload: { newFriendList: res.data || [] }
                })
            }
        },
        * acceptFriend({ acceptId }, { call, put }) {
            const res = yield call(friendApi.acceptFriend, { userId: Storage.get('user').userId, acceptId })
            if(isSuccess(res)) {
                yield put({
                    type: 'getFriendList'
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