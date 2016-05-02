module.exports = {
	path: 'facebook',

	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./facebook'))
		})
	}
}