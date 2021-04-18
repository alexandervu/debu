import { Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

router
  .get('/', (context) => {
    context.response.body = 'Hello world!'
  })
  .get('/book', (context) => {
    context.response.body = 'some books'
  })
  .get('/book/:id', (context) => {
    context.response.body = `Request Book Id is: ${context.params.id}`
  })

export default router
