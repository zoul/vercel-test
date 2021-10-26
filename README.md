This repo illustrates a bug in the serverless function deployment code that’s triggered by a local `package.json` file in the `api` folder. To reproduce locally:

```
% git clone https://github.com/zoul/vercel-test
% cd vercel-test 
% yarn install    
% (cd api && yarn install)
% vercel dev
```

Now, while the code is running locally, just issue:

```
% curl http://localhost:3000/api/hello
An error occurred with this application.

NO_RESPONSE_FROM_FUNCTION
```

And this is the error from “vercel dev”:

```
Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /Users/zoul/Desktop/vercel-test/api/node_modules/node-fetch/src/index.js
require() of ES modules is not supported.
require() of /Users/zoul/Desktop/vercel-test/api/node_modules/node-fetch/src/index.js from /Users/zoul/Desktop/vercel-test/api/hello.ts is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
Instead rename index.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from /Users/zoul/Desktop/vercel-test/api/node_modules/node-fetch/package.json.

   at new NodeError (node:internal/errors:363:5)
   at Module._extensions..js (node:internal/modules/cjs/loader:1126:13)
   at Object.require.extensions.<computed> [as .js] (/usr/local/lib/node_modules/vercel/node_modules/ts-node/src/index.ts:832:44)
   at Module.load (node:internal/modules/cjs/loader:989:32)
   at Function.Module._load (node:internal/modules/cjs/loader:829:14)
   at Module.require (node:internal/modules/cjs/loader:1013:19)
   at require (node:internal/modules/cjs/helpers:93:18)
   at Object.<anonymous> (/Users/zoul/Desktop/vercel-test/api/hello.ts:2:1)
   at Module._compile (node:internal/modules/cjs/loader:1109:14)
   at Module.m._compile (/usr/local/lib/node_modules/vercel/node_modules/ts-node/src/index.ts:839:23) {
 code: 'ERR_REQUIRE_ESM'
}
Error! `node api/hello.ts` failed with exit code 1
```
