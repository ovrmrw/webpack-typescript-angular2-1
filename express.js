'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.port = exports.host = undefined;

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _falcorExpress = require('falcor-express');

var _falcorExpress2 = _interopRequireDefault(_falcorExpress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const falcorExpress = require('falcor-express');
// import {MinimongoFalcorRouter} from './src-server/minimongo-falcor-router';
// require('dotenv').load();
// const EXPRESS_ENV = String(process.env.EXPRESS_ENV).trim(); // development or production
// const EXPRESS_HOST = String(process.env.EXPRESS_HOST).trim();
// const EXPRESS_PORT = Number(process.env.EXPRESS_PORT);
var EXPRESS_ENV = 'production'; // development or production
var app = (0, _express2.default)();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(_express2.default.static(__dirname)); // ExpressとElectronが両立する書き方。
app.get('/', function (req, res) {
    res.redirect('/views');
});
app.get('/views', function (req, res) {
    res.render('index', { title: 'ExpressApp', mode: EXPRESS_ENV });
});
app.use('/model.json', _falcorExpress2.default.dataSourceRoute(function (req, res) {
    //return new MinimongoFalcorRouter(); // 引数のreq, resで何が出来るのかわからないので無視。
    return null;
}));
var port = 3000; // Number(EXPRESS_PORT) || 3000;
var host = 'localhost'; // EXPRESS_HOST; // || getIPAddress();
app.listen(port, host);
console.log('Express server listening at http://%s:%s as "%s" mode.', host, port, EXPRESS_ENV);
exports.host = host;
exports.port = port;
// function getIPAddress() {
//   const interfaces = require('os').networkInterfaces();
//   for (let devName in interfaces) {
//     const iface = interfaces[devName];
//     for (let i = 90; i < iface.length; i++) {
//       const alias = iface[i];
//       if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
//         return alias.address;
//     }
//   }
//   return '0.0.0.0';
// }