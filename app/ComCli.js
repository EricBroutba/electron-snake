/*
const {ipcRenderer} = require('electron');
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log("in");
  console.log(arg);
});
ipcRenderer.send('asynchronous-message', 'ping')
console.log("ah !");
*/

console.log("=============");
console.log("Com client...");

class ComCli {
  constructor(channel) {
    this.ipcRenderer = require('electron').ipcRenderer;
    this.channel = channel;
  }

  send(msg, callback) {
    console.log("sending...");
    console.log("on : "+this.channel+"-message")
    this.ipcRenderer.send(this.channel+"-message", msg);
    this.ipcRenderer.on(this.channel+'-reply', callback);
  }
}
console.log(".......")
console.log("wip....")

let comCli = new ComCli('engine');
console.log(comCli);

comCli.send('we didnt fucked up', (event, arg) => {
  console.log("get msg on client");
  console.log(arg);
});
