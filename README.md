# breaking-bad-display-application

## Breve descripción

La aplicación ha sido realizada usando la última versión de React JS.

Se ha empleado i18next para dotar a la aplicación de dos lenguajes distintos en los que mostrar el contenido, inglés y español. La aplicación detectará el lenguaje del navegador automáticamente, pero se facilitan dos botones en el menú superior donde poder cambiarlo manualmente.

Se ha empleado axios para las llamadas a la API de breakingbadapi.com. Se han creado dos servicios para el manejo de estas llamadas y recuperación de la información. Un servicio para obtener los personajes (todos en forma de lista o de forma individual buscando por id), y otro servicio para obtener las citas más famosas de los personajes.

Se ha utilizado la librería material-ui para usar ciertos componentes visuales como toggle buttons, toolbars, cards, grids, etc.

Se ha usado react-router-dom para la navegación por la página. La ruta raíz (/) redirigirá la aplicación hacia /characters, que es la dirección principal. De ahí, pulsando sobre las fichas de los personajes se irá a character/{id}, donde se mostrará una página de detalles. Para volver a la página principal se facilita un botón "home" en el menú superior y un botón de "volver atrás" en el propio cuerpo de la página.

Se ha hecho uso de "useStyles" para la mayor parte de diseño de la página, así como otros hooks (useState, useHistory de react-router-dom, useEffect y useTranslation).


## Organización

Partimos de la estructura general de un proyecto base de react (creado con create-react-app).

Dentro de src/ en la carpeta ui-components encontraremos dos componentes puramente visuales y genéricos.

Dentro de la carpeta characters/ podemos encontrar todo lo relativo a la muestra de personajes de breaking bad.

CharacterRouter.js es el fichero que se encarga del routing de la aplicación.

En la carpeta services/ están los dos servicios descritos ya con anterioridad.

En la carpeta components/ están todos los componentes visuales particulares de la parte de personajes

## Arranque de la aplicación

Para levantar la aplicación sólo hay que realizar dos pasos.

- En primer lugar ejecutar por consola el comando "npm install" para instalar todas las dependencias.

- Con esto terminado, se puede sencillamente ejecutar "npm start" y esto levantará la aplicación en "localhos:3000"
