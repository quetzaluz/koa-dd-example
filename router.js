let Router = require('koa-router')
let rootRouter = new Router()

rootRouter.get('/', async function (ctx) {
  ctx.body = '<h1>I am a happy endpoint</h1>'
})

module.exports = rootRouter
