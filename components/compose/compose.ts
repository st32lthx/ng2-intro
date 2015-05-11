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

  // TODO: next step: create a binding between two components.
  // when click add button, it will use the service somewhoe
  // to add the values to the msg store ?
  // only thing compose does, is that it knows how to read the
  // values from the input field and provide it for interested
  // parties to use.
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


