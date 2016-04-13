// import 'babel-polyfill'; // moved to webpack.config.js

let message = "this message should be shown between 'start' and 'end'.";

(async () => {
  console.log("start async");
  
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
  console.log(message);
  
  console.log("end async");
})();
