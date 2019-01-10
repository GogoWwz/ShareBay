import request from '../utils/request';

const BASE_URL = '/api/home'

export function getBalance(params) {
    return request(`${BASE_URL}/getBalance`, params, 'GET');
}

export function addBalance(params) {
    return request(`${BASE_URL}/addBalance`, params, 'POST');
}
