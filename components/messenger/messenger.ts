/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, For} from 'angular2/angular2';
import {Compose} from "components/compose/compose"
import {MsgStore} from "components/messenger/MsgStore";


@Component({
  selector: 'messenger',
  injectables: [ MsgStore ]
})

@View({
  templateUrl: "components/messenger/messenger.tpl.html",
  directives: [ Compose, For ]
})

export class Messenger {
  title: string;
  messages: any[];
  constructor(msgStore: MsgStore) {
    this.title = "Messenger Manager";
    this.messages = msgStore.getAll();
    this.store = msgStore;
  }
  // TODO: this exists here. It uses the store
  // to add msgs. Now, we need to be able to use
  // this when somehow. It is important to decide
  // on the responsibilites of components. Does
  // messenger handle the actual message creating?
  // or does the composer handle the data formatting, reading
  // etc? and simply compose provides a method called getInput
  // and then we can call that from here and get the value
  // and then just push it to our store?
  addMsg(msg: string) {
    this.store.add({title: msg, body: "fixed body"});
  }
}


