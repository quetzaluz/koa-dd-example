/*
 * NOTE: If you disable lines 5-13, root route responds.
 However, if you keep these lines enabled, root route responds with 404
 */
const tracer = require('dd-trace').init({
  enabled: true,
  env:'local',
  plugins: false,
  service: 'happy-koa-test',
  debug: true
})

tracer.use('koa')

const Koa = require('koa')
const router = require('./router')
const cors = require('@koa/cors')
const corsError = require('koa-cors-error')

const config = {
  host: 'localhost',
  port: 3005
}

const app = new Koa()

app
  .use(cors())
  .use(corsError)
  .use(router.routes())
  .listen(config.port, () => {
    console.log(`🖥  Serving ${config.host} on PORT:${config.port}`)
  })
