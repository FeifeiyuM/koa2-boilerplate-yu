import fs from 'fs'

let readFromFile = (path) => {
	console.log('in readFromFile')
	return new Promise(function(resolve, reject) {
		fs.readFile(path , function(err, data) {
			if(err) {
				console.error(err)
				reject(new Error(err))
			}
			resolve(data.toString())
		})
	})
}

let readFilePromise = (path) => {
	if(path == null || path == '' || path == undefined) {
		return 'path is null'
	}
	return readFromFile(path)
		.then(data => (data))
		.catch((err) => ('Exception: ' + err))
}

let writeToFile = (path, data) => {
	console.log('in writeToFile')

	data = JSON.stringify(data)
	return new Promise ( function(resolve, reject) {
		fs.writeFile(path, data, function(err) {
			if(err) {
				reject(new Error(err))
			} else {
				resolve(true)
			}
		})
	})
}

let writeFilePromise = (path, data) => {
	if(path == null || path == '' || path == undefined) {
		return 'path is null'
	}
	return writeToFile(path, data)
		.then(data => (data))
		.catch((err) => ('Exception: ' + err))
}


export { readFilePromise, writeFilePromise }
