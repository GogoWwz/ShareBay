import fetch from 'dva/fetch';
import { stringify } from 'qs';

function parseJSON(response) {
	return response.json();
}

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}

	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, params, method) {
	params = params || {}
	params['_'] = Date.now()
	// 基本选项配置
	const defaultOptions = {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
 		}
	}
	// 新增选项配置
	const options = { method: method || 'GET' }
	if(method === 'POST') {
		options.body = JSON.stringify(params)
	}
	if(method === 'GET' && params) {
		url = url + '?' + stringify(params, { arrayFormat: 'repeat' })
	}
	const newOptions = { ...defaultOptions, ...options }
	return fetch(url, newOptions)
		.then(checkStatus)
		.then(parseJSON)
		.then(data => {
			return data
		})
		.catch(err => ({ err }));
}
