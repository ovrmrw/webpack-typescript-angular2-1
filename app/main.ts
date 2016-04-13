import 'systemjs/dist/system';
import 'babel-polyfill/dist/polyfill.min';
import 'angular2/bundles/angular2-polyfills.min';


import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent);