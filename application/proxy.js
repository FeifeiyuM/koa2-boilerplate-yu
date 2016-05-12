import fetch from 'node-fetch'

let objToQueryStr = (obj) => {
	let str = ''
	if (obj !== null && obj !== undefined) {
		Object.keys(obj).map(key => (str = str + key.toString() + '=' + obj[key].toString() + '&'))
		str = str.substring(0, str.length - 1)
	}
	return str 
}

let proxy = (method, url, reqParam, paramType, token) => {
	console.error('in proxy')
	let req={}  //请求体，包括header，method，body等

	if (token != null && token != undefined && token != '') {
			token = 'token\ \ ' + token  //token配额制
	}

	if(/get/i.test(method) || /head/i.test(method)) { //get, head请求配置
		console.log('in get head config')

		url = url + '?' + objToQueryStr(reqParam)  //get请求

		let headers = {}
		if(/eyaos/i.test(url)) {
			console.log('is eyaos')
			headers = {  //内网请求头配置
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': token
			}
		} else {
			console.log('not eyaos')
			headers = {  //外网跨域请求头配置
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}
		req = {  //请求体包装
			method: method.toUpperCase(),
			mode: 'cors',
			headers: headers
		}

	} else { //带body请求配置
		let headers = {}, ContentType = '', reqBody = null

		if(/json/i.test(paramType)) {  //请求参数格式是JSON
			try {  
				reqBody = JSON.stringify(paramType.trim()) //将参数转成JOSN串
			} catch(err) {
				console.log('param format is not JSON')
			}

			ContentType = 'application/json'  //指明参数格式JOSN
		} else { //请求参数为普通格式
			reqBody = objToQueryStr(reqParam)  //参数转换
			ContentType = 'application/x-www-form-urlencoded'  //指明参数格式
		}

		if(/eyaos/i.test(url)) {
			headers = {  //内网请求头配置
				'Content-Type': ContentType, 
				'Authorization': token
			}
		} else {

			headers = {  //外网跨域请求头配置
				'Content-Type': ContentType
			}
		}

		req = { //请求体包装
			method: method.toUpperCase(),
			mode: 'cors',
			headers: headers,
			body: reqBody
		}
	}
	

	return fetch(url, req)
		.then( function(res) {
			console.log('res: ' + res)
			if(res.ok) {
				return res.text().then( data => ( data ))
			} else {
				let error = 'Error: Response Status = ' + res.status
				return error
			}
		}, function(e) {
			console.error(e)
		}) 
}

export default proxy