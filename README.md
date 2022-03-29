# Dillinger
## _Proyecto Final de React-CoderHouse_

En este repositorio se encuentra mi proyecto de react, en el cual aprendi a usar los Hooks basicos, manejo de fireStore(FireBase), JSX, react-router-dom

## Agregados a tener en cuenta

```sh
npm install react-icons
npm install react-router-dom
```

## Dependencias en .env

debes definir las variables las siguientes variables de entorno en .env para el funcionamiento de la app, las mismas hacen referencia a Keys que brinda fireBase(FirebaseConfig):

| Variable en ./firebase/firebase.js | variable en .env |
| ------ | ------ |
| apiKey: process.env.REACT_APP_apiKey | REACT_APP_apiKey="tu apiKey"|
| authDomain: process.env.REACT_APP_authDomain | REACT_APP_authDomain="tu authDomain"|
| projectId: process.env.REACT_APP_projectId |REACT_APP_projectId="tu projectId" |
| storageBucket: process.env.REACT_APP_storageBucket| REACT_APP_storageBucket="tu storageBucket" |
| messagingSenderId: process.env.REACT_APP_messagingSenderId | REACT_APP_messagingSenderId="tu messagingSenderId"|
| appId: process.env.REACT_APP_appId | REACT_APP_appId="tu appId"|

react-icons fue seleccionado para mejorar el aspecto final de la app.

react-router-dom se utilizo para el ruteo de toda la página.


