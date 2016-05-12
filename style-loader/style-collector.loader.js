module.exports = function() { }
module.exports.pitch = function(req) {
	console.log('[test] ', 'in style-collector.loader')
	console.log('[test] ', req)
	this.cacheable()
	return 'require(' + JSON.stringify(require.resolve('./style-collector')) + 
		').add(require(' + JSON.stringify('!!' + req ) + '))\n' +
		"delete require.cache[module.id]"
}