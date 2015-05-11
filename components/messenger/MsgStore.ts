export class MsgStore {
  msgs: any[];
  constructor() {
    this.msgs = [
      { title: "hello", body: "this is the hello message" },
      { title: "meeting", body: "this is the meeting message" },
      { title: "goodby", body: "this is the goodby message" }
    ];
  }
  getAll () {
    return this.msgs;
  }
  add(msg) {
    this.msgs.push(msg);
  }
}
