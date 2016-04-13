import {Component} from 'angular2/core';
//import {Router, Route, RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';

const COMPONENT_SELECTOR = 'my-app'
@Component({
  selector: COMPONENT_SELECTOR,
  template: `
    <h2>my-app</h2>
    <ul>
      <li *ngFor="#text of texts">{{text}}</li>
    </ul>
  `,
  //directives: [ROUTER_DIRECTIVES]
})
export class App {
  texts: string[] = ['a', 'b', 'c'];
  // constructor(public location: Location, public router: Router) {
  // }
  // getLinkStyle(path: string): boolean {
  //   if (path === this.location.path()) {
  //     return true;
  //   }
  //   else if (path.length > 0) {
  //     return this.location.path().indexOf(path) > -1;
  //   }
  // }
}