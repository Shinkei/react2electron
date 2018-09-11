# react2electron
Como convertir una aplicacion web en react a una de escritorio con electron

![transformation](https://thumbs.gfycat.com/CoarseBigheartedChick-size_restricted.gif)

En ocaciones ya se ha trabajado y avanzado en un proyecto web, cuando por diferentes motivos tienes que cambiar todo a una aplicacion de escritorio "plop".

Asi, teniendo en cuenta que electron es un contenedor que por debajo es un browser chrome, porque no ejecutar nuestra aplicacion dentro de este contenedor?

![whyNotBoth](https://thumbs.gfycat.com/BlueIllustriousHylaeosaurus-small.gif)

Pero espera,¿tambien te gustaria un ejecutable para cada sistema operativo?, bien tambien se puede

![Capsule](https://i.giphy.com/26tn9IQyZ4AvSoKHu.gif)

## Pasos a seguir

1) Instalar dependencias
  ```
  yarn add -D electron-builder electron wait-on concurrently
  yarn add electron-is-dev
  ```
2) Crear el archivo que ejecutara la aplicacion de electron al iniciar
```
// en el public folder crear un archivo llamado electron.js
touch public/electron.js
```
3) Copiar dentro del archivo electron.js
```
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

```
4) El paso mas importante de todos, selecciona una imagen para que sea el icono de la aplicacion, la debes guardar en `public/icon.png`

5) Ahora hay que agregar el atributo main al package.json
```
"main":"public/electron.js",
```
6) Por ultimo un script para ejecutar la aplicacion en una ventana del sistema operativo usando electron
```
"script":{
  "electron-dev": "concurrently \"BROWSER=none yarn start\" \"wait-on http://localhost:3000 && electron .\""
}
```

[siguente paso](https://github.com/Shinkei/react2electron/tree/step1)