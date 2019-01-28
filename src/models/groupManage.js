import * as groupApi from '@/services/group'
import isSuccess from '@/utils/isSuccess'
import Storage from '@/utils/storage'
// import { USER_ID } from '@/utils/globalVariable'

export default {
    namespace: 'groupManage',
    state: {
        // 所在群列表
        groupList: []
    },
    effects: {
        * getGroupList({}, { call, put }) {
            const res = yield call(groupApi.getGroupList, { userId: Storage.get('user').userId })
            if(isSuccess(res)) {
                yield put({
                    type: 'changeData',
                    payload: { groupList: res.data || [] }
                })
            }
        },
        * exitGroup({ groupId }, { call, put }) {
            const res = yield call(groupApi.exitGroup, { groupId })
            console.log(res)
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