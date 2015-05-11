/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';
import {Compose} from "components/compose/compose"


@Component({
  selector: 'messenger'
})

@View({
  templateUrl: "components/messenger/messenger.tpl.html",
  directives: [ Compose ]
})

export class Messenger {
  title: string;
  messages: any[];
  constructor() {
    this.title = "Messenger Manager";
    this.messages = [
      { title: "hello", msg: "this is the hello message" },
      { title: "meeting", msg: "this is the meeting message" },
      { title: "goodby", msg: "this is the goodby message" }
    ];
  }
}


