console.log("required");
const {ipcMain} = require('electron');
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg);
  event.sender.send('asynchronous-reply', 'pong');
});
