# webpack-typescript-angular2-1

So far, this repo is a super simple TypeScript async/await sample with Webpack build.

1.Install modules.
```
npm install
```

2.Build and watch changes.
```
npm run watch
```

3.Run async/await sample.
```
npm start
```

(Description)  
/sample/bundle.js is generated from /sample/main.ts with Webpack build.  
main.ts -> tsc(es2015) -> babel(es5) -> bundle.js  
bundle.js also includes babel-polyfill to run async/await function. 