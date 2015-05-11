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
  constructor() {
    this.title = "Composer";
  }
}


