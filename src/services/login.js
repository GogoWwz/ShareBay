import request from '../utils/request';

export function login(params) {
    console.log("调请求接口-->", params)
    return request('/api/login', params, 'POST');
}
