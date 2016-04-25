import koa from 'koa'
import views from 'koa-nunjucks-promise'
import convert from 'koa-convert'
import logger from 'koa-logger'
import mount from 'koa-mount'
import server from 'koa-static'
import bodyParser from 'koa-bodyparser'

import testRouter from './router/testRouter'

const app = new koa()

console.log('in koa')

app.use(views(`${__dirname}/views`, {
	ext: 'html',
	noCache: true,
	watch: true,
	filters: {
	    json: function(str) {
	      return JSON.stringify(str, null, 2);
	}}
}))

app.use(mount('/static', server(`${__dirname}/public`)))
app.use(logger())
app.use(bodyParser())
app.use(testRouter.routes())
	.use(testRouter.allowedMethods())

app.listen(3000, () => console.log('server started 3000'))

export default app