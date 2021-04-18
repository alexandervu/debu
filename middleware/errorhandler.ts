import { Context, log, path  } from '../deps.ts'

export const errorhandler = (log: log.Logger) => {
  return async (context: Context, next: () => Promise<void>) => {
    try { 
      await next()
      if (!context.response.body) {
        context.response.status = 404
        context.response.body = (await Deno.readTextFile(path.join(Deno.cwd(), 'templates/404.html'))).toString()
      }
    } catch (routeError) {
      log.error(routeError.message)
      context.response.status = 500
      context.response.body = (await Deno.readTextFile(path.join(Deno.cwd(), 'templates/500.html'))).toString()
    }
  }
}
