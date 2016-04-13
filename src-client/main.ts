// import 'babel-polyfill'; // moved to webpack.config.js

let message = "this message should be shown between 'start' and 'end'.";

(async () => {
  console.log("start async");

  await new Promise(resolve => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 2000);
  });

  console.log("end async");
})();
