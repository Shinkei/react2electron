const electron = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

const { app, BrowserWindow, nativeImage } = electron;
const appIcon = nativeImage.createFromPath(path.join(__dirname, 'icon.png'));

let mainWindow;

function createWindow(){
  mainWindow = new BrowserWindow({ width:900, height:680, icon: appIcon});
  mainWindow.loadURL(isDev? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => { mainWindow = null});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => { process.platform !== 'darwin' && app.quit() });

app.on('activate', () => { mainWindow === null && createWindow() });
