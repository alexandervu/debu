import { Context, log } from '../deps.ts'
const X_RESPONSE_TIME = 'X-Response-Time'

export const routelogger = (log: log.Logger) => {
  return async (context: Context, next: () => Promise<void>) => {
    await next()
    const responseTime = context.response.headers.get(X_RESPONSE_TIME)
    log.info(`${context.request.method} on route "${context.request.url.pathname}" from ${context.request.url.origin} [${responseTime}]`)
  }
}
