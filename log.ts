/**
 * Logger definiton
 * Default logger will not allow to log Debug messages. This should extend the security,
 * when forget on production to set the right logger.
 * On production we log also to file, omit the debug and log messages.
 */
import { log, path } from './deps.ts'
import env from './env.ts'


/**
 * 
 * @param loggerName {string}
 * @returns {promise}
 */
export async function createLogger(loggerName: string) {
  const filename = path.join(env.AIKON_LOGGER_PATH, 'log.txt').toString()
  await log.setup({
    handlers: {
      console: new log.handlers.ConsoleHandler('DEBUG'),
  
      file: new log.handlers.FileHandler('WARNING', {
        filename,
        // you can change format of output message using any keys in `LogRecord`.
        formatter: '{levelName} {msg}'
      })
    },
    loggers: {
      // configure default logger available via short-hand methods above.
      default: {
        level: 'DEBUG',
        handlers: ['console']
      },
  
      debug: {
        level: 'DEBUG',
        handlers: ['console']
      },
  
      production: {
        level: 'ERROR',
        handlers: ['console', 'file']
      },
    }
  })

  return log.getLogger(loggerName)
}
