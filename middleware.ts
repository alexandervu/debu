import { oakCors, composeMiddleware } from './deps.ts'
import { responseTime } from './middleware/responsetime.ts'
/**
 * 
 * @param config To be added
 */
export const middleware = () => {
  return composeMiddleware([
    responseTime,
    oakCors()
  ])
} 
