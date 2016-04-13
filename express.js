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

var EXPRESS_ENV = 'production';
var app = (0, _express2.default)();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(_express2.default.static(__dirname));
app.get('/', function (req, res) {
    res.redirect('/views');
});
app.get('/views', function (req, res) {
    res.render('index', { title: 'ExpressApp', mode: EXPRESS_ENV });
});
app.use('/model.json', _falcorExpress2.default.dataSourceRoute(function (req, res) {
    return null;
}));
var port = 3000;
var host = 'localhost';
app.listen(port, host);
console.log('Express server listening at http://%s:%s as "%s" mode.', host, port, EXPRESS_ENV);
exports.host = host;
exports.port = port;