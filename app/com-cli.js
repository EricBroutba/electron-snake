const {ipcRenderer} = require('electron');
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log("in");
  console.log(arg);
});
ipcRenderer.send('asynchronous-message', 'ping')
console.log("ah !");
