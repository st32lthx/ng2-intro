/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

/*
  The root component. The other components
  are the subtree of the root.
*/
@Component({
  selector: 'root'
})

@View({
  templateUrl: "components/root/root.tpl.html"
})

export class Root {
  title: string;
  constructor() {
    this.title = "Introduction to Angular2";
  }
}


