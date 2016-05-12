module.exports = {
  path: 'helloworld',

  getChildRoutes(location, cb) {
  	require.ensure([], (require) => {  //require.ensure webpack分片打包
  		cb(null, [
  			require('./routes/facebook'),  //异步加载子组件
  			require('./routes/google')
  		])
  	})
  },

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./helloworld'))  //引入主组件
    })
  }
}