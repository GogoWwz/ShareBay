import request from '../utils/request';

const BASE_URL = '/api/group'

export function getGroupList(params) {
    return request(`${BASE_URL}/list`, params, 'GET')
}

export function exitGroup(params) {
    return request(`${BASE_URL}/exit`, params, 'POST');
}


