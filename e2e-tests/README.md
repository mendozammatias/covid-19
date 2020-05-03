## Corona App - e2e cypress tests

## Tabla de Contenidos

- [Tecnologías](#tecnologías)
- [Pre Requisitos](#pre-requisitos)
- [Instalar dependencias](#instalar-dependencias)
- [Ejecutar localmente](#correr-los-tests)

## Tecnologías

El proyecto utiliza las siguientes tecnologías:

- Cypress

### Pre Requisitos

Para poder ejecutar esta aplicación necesitas instalar los siguientes componentes:

- **Nodejs >= v10**
- **NPM >= v6**

Para instalar estos componentes podes usar [NVM](https://github.com/nvm-sh/nvm) o [NVM Windows](https://github.com/coreybutler/nvm-windows).

### Instalar dependencias

Para poder instalar las dependencias de la app, primero necesitas cumplir los [pre-requisitos](#pre-requisitos). Una vez hecho eso, debes ejecutar el siguiente comando posicionandote en el root del proyecto:

```bash
npm i
```

### Correr los Tests

Para poder correr los tenes debes ejecutar 2 acciones:

1. Levantar la app desde el root haciendo un `npm start`
2. Correr desde el root haciendo el script `npm run test`

Esto ejecutará todos los casos de prueba.
