'use strict';

require('systemjs/dist/system');

require('babel-polyfill/dist/polyfill.min');

require('angular2/bundles/angular2-polyfills.min');

var _browser = require('angular2/platform/browser');

var _app = require('./app.component');

(0, _browser.bootstrap)(_app.AppComponent);