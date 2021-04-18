/**
 * Create APP and start it
 */
import { Application, dotenvConfig } from './deps.ts'
import { Context } from "./types.ts";
import { createLogger } from './log.ts'
import { middleware } from './middleware.ts'
import router from './routes/index.ts'

const env = dotenvConfig({ safe: true })
const appLogger = await createLogger(env.AIKON_LOGGER)
const controller = new AbortController()
const { signal } = controller
const app = new Application<Context>()

/* Event listeners */
app.addEventListener('listen', ({ hostname, port, secure }) => {
  appLogger.info(`🚀 Listening on: ${secure ? 'https://' : 'http://'}${hostname ?? 'localhost'}:${port}/`)
})

/* Middleware */
app.use(middleware())

/* Routes */
app.use(router.routes())
app.use(router.allowedMethods())

/*
 * App listen is assigned to const listenPromise. When aboard signel is send by the system,
 * the controler aboard the listenerPromise and the source below await listenPromise is executed.
 * So calling `controller.abort()` will stop the listener. We can use this when handling some
 * serious errors, where stopping the listener is required. 
 */
const listenPromise = app.listen({ port: parseInt(env.PORT), signal})
// controller.abort() // this would stop the called listenr directly on start
await listenPromise
appLogger.info(`❌  Stop listening!`)
