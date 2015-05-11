/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';
import {Parent} from 'angular2/annotations';
import {Messenger} from "components/Messenger/Messenger";

/*
  The root component. The other components
  are the subtree of the root.
*/
@Component({
  selector: 'compose',
  injectables: [ Messenger ]
})

@View({
  templateUrl: "components/compose/compose.tpl.html"
})

export class Compose {
  title: string;
  iMsg: any;
  messenger: Messenger;
  constructor(@Parent messenger: Messenger) {
    this.title = "Composer";
    this.iMsg = {};
    this.messenger = messenger;
  }

  setMsg(title, body) {
    this.iMsg = { title: title.value, body: body.value };
    console.log(this.iMsg);
    this.messenger.addMsg(title.value, body.value);
  }

  getMsg(title, body) {
    return this.iMsg;
  }

  clear(title, msg) {
    title.value = "";
    msg.value = "";
  }

  doneTyping($event, title, msg) {
    let enter = $event.which === 13;
    if(enter) {
      this.setMsg(title, msg);
      this.clear(title, msg);
    }
  }
}
