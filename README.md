# react2electron
Como convertir una aplicacion web en react a una de escritorio con electron

# Crear el Instalador
Ahora para crear el instalador es necesario agregar la configuracion que necesita
react-builder.

![vegetaCooking](https://i.pinimg.com/originals/77/d4/26/77d426bcd0b40ee1cc8e4e7622f59ec6.gif)

## Agregar en el package.json
```
"build": {
    "appId": "com.doge.mdt",
    "productName": "React2Electron",
    "copyright": "It's Free (cc)",
    "files": [
      "build/**/*",
      "node_modules/**/*"
    ],
    "directories": {
      "buildResources": "assets"
    },
    "linux": {
      "target": [
        "pacman",
        "AppImage"
      ],
      "icon": "build/icon.png",
      "executableName": "React2Electron",
      "maintainer": "Jorge Ramirez",
      "synopsis": "This is a demo of a react aplication running in electron",
      "desktop": {
        "Name": "React2Electron",
        "Comment": "This is a demo of a react aplication running in electron",
        "Type": "Application",
        "Icon": "build/icon.png",
        "StartupNotify": "true",
        "Categories": "Utility"
      }
    },
    "win": {
      "target": "nsis",
      "icon": "build/icon.ico"
    },
    "mac": {
      "target": "dmg",
      "icon": "build/icon.icns"
    }
  },
  "author": {
    "name": "Jorge Ramirez",
    "email": "micorreo@gmail.com"
  }
```

admas de :

`"homepage": "./",`

Asi se ejecutara la aplicacion

## Crear los scripts para la creacion 

```
"create-desktop-app": "build -l --c.extraMetadata.main=build/electron.js",
"create-desktop-app-mac": "build -m --c.extraMetadata.main=build/electron.js"
```

### Nota:
Recuerda ejecutar yarn build antes de create-desktop-app.
### Nota2:
Para que funcione la creacion de el instalado de windows desde linux es necesario instalar wine.
### Nota3:
Para crear el instalado de mac es necesario ejecutar el comando desde un mac.

[resultado final](https://github.com/Shinkei/react2electron/tree/step2)
