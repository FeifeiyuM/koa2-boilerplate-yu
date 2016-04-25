import Router from 'koa-router'
import proxy from '../application/proxy'
import { readFilePromise, writeFilePromise } from '../application/filehandle'
const router = new Router()
console.log('in router')

router.get('/', async (ctx, next) => {
	console.log('>>one')
	await next()
	console.log('<<one')
	ctx.body = 'Hello World'
})

router.get('/start', async (ctx, next) => {
	console.log('in /start')

	await ctx.render('template/start', {title: 'koa start'})
})

router.post('/start', async (ctx, next ) => {
	console.log('/start/post')

	let reqParam = {
		userName: ctx.request.body.user_name,
		password: ctx.request.body.password
	}
	console.log('body:')
	console.dir(ctx.request.body)
	let data = reqParam
	await ctx.render('template/start', {title: 'koa start', data: data } )
})

let respTest = () => {
	return 'ok'
}

router.get('/proxy', async (ctx, next) => {
	console.log('in fetch')
	let data = null
	let url = 'http://interview.yunzao.cn/api/100/item/list'
	let param = {token: 'c48d41cbc644388a3d84300689c31a2a' }
	let resp1 = await proxy('post', url, param, null, null)
	let resp2 = await respTest()

	ctx.body = resp1 + ' ' + resp2
})

router.get('/restful/userList', async (ctx, next) => {
	console.log('in /restful/userList')
	let data = {}
	let path = './resource/user.json'
	let users = await readFilePromise(path)
	try {
		users = JSON.parse(users)
	} catch(err) {
		console.log('data is not json format')
	}
	data.users = users
	await ctx.render('restful/index', { title: 'RESTful', data: data })

})

router.post('/restful/addUser', async (ctx, next) => {
	console.log( 'in /restful/adduser' )
	let path = './resource/user.json'
	let newUser = {  //获取数据
		name: ctx.request.body.name,
		password: ctx.request.body.password,
		profession: ctx.request.body.profession
	}

	let users = await readFilePromise(path)
	try {
		users = JSON.parse(users.trim())
		newUser.id = users[users.length -1].id + 1
		users.push( newUser )
		await writeFilePromise(path, users)
	} catch(err) {
		console.error(err)
	}

	ctx.redirect('/restful/userList')  //重定向

})

router.delete('/restful/deleteUser/:id', async (ctx, next) => {
	console.log('/restful/deleteUser/:id')
	let path = './resource/user.json'
	let id = eval(ctx.params.id)
	let users = await readFilePromise(path)
	console.log('id: ' + id)
	try {
		users = JSON.parse(users)
		for(let i=0; i<users.length; i++) {
			if(users[i].id === id) {
				console.log('user del:' + users[i].id )
				users.splice(i, 1)
			}
		}
		console.dir(users)
		await writeFilePromise(path, users)
	} catch(err) {
		console.error(err)
	}

	ctx.status = 202
	ctx.body = users

})

export default router