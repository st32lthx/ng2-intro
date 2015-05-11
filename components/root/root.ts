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
  /* Registering messenger with the root.
      In return, messenger requires what it needs.
      At this point, messenger requires compose
      to do message composing.
      So far: root -> messenger -> compose
   */
  directives: [ Messenger ]
})

export class Root {
  title: string;
  constructor() {
    this.title = "Introduction to Angular2";
  }
}


