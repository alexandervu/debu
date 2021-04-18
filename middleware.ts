import { oakCors, composeMiddleware, log } from './deps.ts'
import { responseTime } from './middleware/responsetime.ts'
import { routelogger } from './middleware/routelogger.ts'
/**
 * 
 * @param config To be added
 */
export const middleware = (log: log.Logger) => {
  return composeMiddleware([
    routelogger(log),
    responseTime,
    oakCors()
  ])
} 
