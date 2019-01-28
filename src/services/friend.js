import request from '../utils/request';

const BASE_URL = '/api/friend'

export function getFriendList(params) {
    return request(`${BASE_URL}/list`, params, 'GET')
}
export function addFriend(params) {
    return request(`${BASE_URL}/add`, params, 'POST')
}
export function getWaitFriendList(params) {
    return request(`${BASE_URL}/waitList`, params, 'GET')
}
export function getNewFriendList(params) {
    return request(`${BASE_URL}/newList`, params, 'GET')
}
export function acceptFriend(params) {
    return request(`${BASE_URL}/accept`, params, 'POST')
}