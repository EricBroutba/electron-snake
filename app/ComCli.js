const {ipcRenderer} = require('electron');
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log("in");
  console.log(arg);
});
ipcRenderer.send('asynchronous-message', 'ping')
console.log("ah !");

class ComCli {
  constructor(channel) {
    this.ipcRenderer = require('electron').ipcRenderer;
    this.channel = channel;
  }
  this.ipcRenderer.on(this.channel, (event, arg) => {
    console.log("new message on client !");
    console.log(event);
    
  });

  send(msg) {
    this.ipcRenderer.send(msg);
  }

}
