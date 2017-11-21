const {ipcRenderer} = require('electron');
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log("in");
  console.log(arg);
});
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})
console.log("ah !");
