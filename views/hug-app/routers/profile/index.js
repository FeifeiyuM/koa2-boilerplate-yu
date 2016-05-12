module.exports = {
  path: 'profile',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, {
      	profile: require('./profile'),  //将引入的主组件多个时， 将其包装为对象
      	school: require('./school')})  //在通过props引入该组件是，要使用元素名，不能直接使用children
    })
  }
}