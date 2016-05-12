import koa from 'koa'
import nunjucksViews from 'koa-nunjucks-promise'
import convert from 'koa-convert'
import logger from 'koa-logger'
import mount from 'koa-mount'
import server from 'koa-static'
import bodyParser from 'koa-bodyparser'

import testRouter from './router/testRouter'

const app = new koa()

console.log('in koa')

app.use(nunjucksViews(`${__dirname}/views`, {  //模板插件
	ext: 'html',
	noCache: true,
	watch: true,
	filters: {
	    json: function(str) {
	      return JSON.stringify(str, null, 2);
	}}
}))

app.use(mount('/static', server(`${__dirname}/public`)))  //设置静态文件路径
app.use(logger())  //日志
app.use(bodyParser())  //参数解析
app.use(testRouter.routes())  //路由
	.use(testRouter.allowedMethods())

app.listen(3000, () => console.log('server started 3000'))

export default app

