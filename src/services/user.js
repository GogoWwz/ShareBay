import request from '../utils/request';

const BASE_URL = '/api/user'

export function findUser(params) {
    return request(`${BASE_URL}/findUser`, params, 'POST')
}



