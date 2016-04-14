/*
index.htmlで<script src=...>していたものをここに記述。
*/
import 'babel-polyfill/dist/polyfill.min';
//import 'systemjs/dist/system';
import 'angular2/bundles/angular2-polyfills.min';

/*
ここからAngular2のコード。
*/
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent);