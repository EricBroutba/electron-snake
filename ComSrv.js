
const {ipcMain} = require('electron');
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg);
  event.sender.send('asynchronous-reply', 'pong');
});

let instance = null;
class ComSrv {
  constructor() {
    if(!instance) {
      instance = this;
      let {ipcMain} = require('electron');
      this.ipcmain = ipcMain;
    }
    return instance;
  }

  this.ipcMain.on('engine', (event, arg) => {
    // Do stuff
    console.log("new message from engine");

    event.sender.send('event-response', 'DATA');
  });
}
