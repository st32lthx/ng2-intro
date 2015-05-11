/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';


/*
  The root component. The other components
  are the subtree of the root.
*/
@Component({
  selector: 'compose'
})

@View({
  templateUrl: "components/compose/compose.tpl.html"
})

export class Compose {
  title: string;
  iMsg: string;
  constructor() {
    this.title = "Composer";
    this.iMsg = "";
  }
  // has to provide public api so other components
  // can consume.
  getMsg(msg) {
    console.log(msg);
    this.iMsg = msg;
    return msg;
  }
  doneTyping($event) {
    if($event.which === 13) {
      console.log($event.target.value);
      this.iMsg = $event.target.value;
      $event.target.value = null;
    }
  }
}


