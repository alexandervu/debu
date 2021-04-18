
import { Context } from '../deps.ts'
const X_RESPONSE_TIME = 'X-Response-Time'

export const responseTime = async (context: Context, next: () => Promise<void>) => {
  const start = Date.now()
  await next()
  const ms: number = Date.now() - start
  context.response.headers.set(X_RESPONSE_TIME, `${ms}ms`)
}
