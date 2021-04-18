# DeBu (De-Bu - Bu Japanese for 'part')

## Commands

The list provide basic the deno commands. For further information please refer to
the [deno documentation](https://deno.land/manual/getting_started/command_line_interface). 

**run** `deno run --allow-net --allow-env --allow-write --allow-read ./app.ts`    
**lint** `deno lint --unstable`    
**cache** `deno cache https://deno.land/x/oak/mod.ts`

To start the development process we use [**denon**](https://github.com/denosaurs/denon).

```bash
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```

A start script config has been created, so to start the development process with automatic
file reload use the command: `denon start`

Hint: do not forget to export denon binary diretory to path: `export PATH="/Users/<user>/.deno/bin:$PATH"`

## Todo

- [x] Server project initialisation (oak)
- [x] Reload server on file change (denon)
- [x] Add file and console logging (deno)
- [x] Environment variables (dotenv)
- [x] Routes
- [x] 404 Page not found
- [ ] Configuration file
- [ ] Middleware
  * [x] Cors (cors)
  * [ ] JWT/Passport
  * [ ] Helmet
  * [x] Route Logger
  * [x] Error handler
- [ ] MongoDB / DB connenction
- [ ] Database Models
- [ ] GraphQL, Resolvers in own folder
- [ ] Context extension with user/authentication
- [ ] i18n
- [ ] Sentry Error Logging
- [ ] Begin.com deployment
