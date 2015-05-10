/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'root'
})

@View({
  template: `
  <div>
    <h1>
      {{ title }}
    </h1>

  </div>`
})

class Root {
  title: string;
  constructor() {
    this.title = "Introduction to Angular2";
  }
}

bootstrap(Root);
