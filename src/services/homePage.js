import request from '../utils/request';

const BASE_URL = '/api/home'

export function getBalance(params) {
    return request(`${BASE_URL}/getBalance`, params, 'GET');
}

export function addBalance(params) {
    return request(`${BASE_URL}/addBalance`, params, 'POST');
}

export function takeBalance(params) {
    return request(`${BASE_URL}/takeBalance`, params, 'POST');
}

export function getDialog(params) {
    return request(`${BASE_URL}/getDialog`, params, 'GET');
}

export function getGroupList(params) {
    return request(`${BASE_URL}/getGroupList`, params, 'GET')
}