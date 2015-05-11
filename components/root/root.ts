/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';
import {Messenger} from "components/messenger/messenger";

/*
  The root component. The other components
  are the subtree of the root.
*/
@Component({
  selector: 'root'
})

@View({
  templateUrl: "components/root/root.tpl.html",
  directives: [ Messenger ] /* Registering messenger with the root. */
})

export class Root {
  title: string;
  constructor() {
    this.title = "Introduction to Angular2";
  }
}


