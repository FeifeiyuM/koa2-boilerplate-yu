var stuff = []

exports.add = function(style) {
	console.log('in style-collecotr add')
	console.log(style)
	stuff.push(style)
}

exports.collect = function(fn) {
	console.log('in style-collecotr collect')
	return stuff.join('\n')
}