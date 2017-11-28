console.log("on com srv !");
console.log("============");

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

  get(channel, callback) {
    console.log("waiting....");
    this.ipcmain.on(channel+'-message', callback);
  }
}

let comSrv = new ComSrv();
comSrv.get('engine', (event, arg) => {
  console.log("get msg on server");
  console.log(arg);
  event.sender.send('engine', 'Feu Feu');
});
