# 👑🦠 - COVID-19 Check App

Este repositorio contiene el código de la aplicación del 👑🦠.

## Tabla de Contenidos

- [Tecnologías](#tecnologías)
- [Pre Requisitos](#pre-requisitos)
- [Flujo de Desarrollo](#flujo-de-desarrollo)
- [Instalar dependencias](#instalar-dependencias)
- [Ejecutar localmente](#correr-la-app)
  - [Levantar la app](#levantar-la-app)
  - [Probar la app en un dispositivo móvil](#probar-la-app-en-un-dispositivo-móvil)
- [Deployar la app](#deployar-la-app)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
  - [No puedo hacer un commit](#no-puedo-hacer-un-commit)

### Tecnologías

El proyecto utiliza las siguientes tecnologías:

- [Create React App](https://create-react-app.dev/)
- [Material UI](https://material-ui.com/)
- [React](https://es.reactjs.org/)

### Pre Requisitos

Para poder ejecutar esta aplicación necesitas instalar los siguientes componentes:

- **Nodejs >= v10**
- **NPM >= v6**

Para instalar estos componentes podes usar [NVM](https://github.com/nvm-sh/nvm) o [NVM Windows](https://github.com/coreybutler/nvm-windows).

### Flujo de Desarrollo

Para desarrollar seguimos las siguientes convenciones:

- [Semantic commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/): Realizamos los commits en forma estandar.
- [Semantic versioning](https://semver.org/): Generamos las versiones en forma estandar.
- [Feature Branching](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow): Trabajamos con branches por feature/fix.

### Instalar dependencias

Para poder instalar las dependencias de la app, primero necesitas cumplir los [pre-requisitos](#pre-requisitos). Una vez hecho eso, debes ejecutar el siguiente comando posicionandote en el root del proyecto:

```bash
npm i
```

### Ejecutar localmente

#### Levantar la app

Para poder ejecutar la app, necesitas ejecutar el siguiente comando:

```bash
npm start
```

Esto va a levantar la app en `http://localhost:3000`.

#### Probar la app en un dispositivo móvil

Para poder probar la app en un dispositivo móvil, podes seguir los siguientes steps:

1. [Setup de Remote Debugging](https://developers.google.com/web/tools/chrome-devtools/remote-debugging?hl=es)
2. [Setup de Port Forwarding](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/local-server?hl=es)

**PD: Acordate que en el step 2 vas a tener que poner el puerto 3000.**

Al terminar este setup, vas a poder entrar al browser desde tu celu, poner la url `http://localhost:3000` y se verá la app en tu celu.

### Deployar la app

Para poder deployar la app debes realizar 2 steps:

1. Ejecutar el siguiente script:

```bash
npm run build
```

2. Subir los contenidos de la carpeta `build` a una CDN.

### Testing

Para poder testear la app internamente, cada vez que se suben cambios a este repositorio se genera un proceso de CI/CD.

Al finalizar este proceso, la app queda desplegada en la siguiente [URL](https://blackboxvision.gitlab.io/covid-19/corona-app).

**Cabe destacar que esta URL queda visible solamente para los usuarios de este proyecto**

### Troubleshooting

#### No puedo hacer un commit

Puede que en algunos casos no puedas commitear, esto se puede dar por el siguiente caso:

- No cumpliste con los [Pre-requisitos](#pre-requisitos).

Este error se da porque para realizar un commit ejecutamos `husky` como un hook de pre-commit que termina corriendo los siguientes comandos:

1. Setup de `lint-staged` para correr `prettier` y `eslint`.
2. Escribe todos los files con `prettier` para que el código tenga todo el mismo formato.
3. Ejecuta `eslint` sobre todos los files para poder validar que el código este bien.
