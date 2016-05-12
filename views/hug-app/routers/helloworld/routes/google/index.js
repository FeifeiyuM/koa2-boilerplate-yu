module.exports = {
	path: 'google',

	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./google'))
		})
	}
}