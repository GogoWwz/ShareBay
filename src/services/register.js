import request from '../utils/request';

export function register(params) {
    return request('/api/register', params, 'POST');
}
