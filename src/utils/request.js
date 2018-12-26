import fetch from 'dva/fetch';
import { message } from 'antd'
// import { stringify } from 'qs';

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
	// 基本选项配置
	const defaultOptions = {
		// ...
	}
	// 新增选项配置
	const options = { method: method || 'GET' }
	if(method === 'POST') {
		options.headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json'
 		}
		options.body = JSON.stringify(params)
	}
	const newOptions = { ...defaultOptions, ...options }
	return fetch(url, newOptions)
		.then(checkStatus)
		.then(parseJSON)
		.then(data => {
			if(data.code !== 8888 ) {
				return message.warning(data.message)
			}
			return data
		})
		.catch(err => ({ err }));
}
