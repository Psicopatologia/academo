# AcaDemo
Comunidad educativa. [Aplicación desplegada aquí](https://academo-sebastian.herokuapp.com/)

## Indice
  * [Introducción](#introducci-n)
    + [Sistema de diseño](#sistema-de-dise-o)
    + [Estructura del proyecto](#estructura-del-proyecto)
    + [Estilos](#estilos)
  * [Enrutamiento](#enrutamiento)
  * [Componentes](#componentes)
    + [Button](#button)
    + [Header](#header)
    + [LoadAnimation](#loadanimation)
    + [StarRating](#starrating)
    + [UserRating](#userrating)
  * [Containers](#containers)
    + [DropDownUser](#dropdownuser)
    + [RatingContainer](#ratingcontainer)
    + [ButtonGroup](#buttongroup)
  * [Pages](#pages)
    + [Home](#home)
    + [Login](#login)
    + [ClassPage](#classpage)

## Introducción
Los patrones seguidos en el proyecto son los siguientes:

### Sistema de diseño
Se utiliszó Atomic Design pensando en la modularidad y reusabilidad del código

### Estructura del proyecto
El código de la aplicación se encuentra dentro de la carpeta `src`. Dentro de esta se sigue muy de cerca Atomic Design y se dividen las carpetas usando nomenclatura en ingles así: `components` `containers`  y `pages`
Están las siguientes carpetas adicionales
- `assets` para almacenar imagenes y otras utilidades a futuro
- `routes` donde se almacena el código encargado del enrutamiento
- `styles` donde se almacena todos los estilso de la aplicación

### Estilos
Se realizaron siguiendo BEM en el siguiente formato `contenedor__elemento--modificador` en caso de usar un nombre de dos palabras se usó camel case (`camelCase`). Los nombres de los archivos son iguales al código que se aplique.

## Enrutamiento
El enrutamiento de la aplicación se realizó con la librería React Router, esta se encuentar en el archivo `src/routes/App.js` donde se relaciona una ruta a un componente de react que será una pagina.

## Componentes
Todos almacenados en `src/components` 

### Button
Brinda un botón html con el estilo estándar de la aplicación.
Parametros:
- `click` que determina la funcion a ejecutar al ser presionado
- `className` que recibe las clases adicionales que se le quieran dar
- `color` define el color del botón

Colores disponibles
- `blue` variación azul
- `white` variación blanca

### Header
Es el header estándar de la aplicación, este tiene un logo a la izquierde siempre los hijos que se le de será lo que mostrará a su derecha sean links o la informaciónde sesión

### LoadAnimation
Es una animación básica de carga circular.
Parametros:
- `color` si se omite la animación será blanca, solo se ha añadido la opcion *blue* para una animación azúl
- `w` que define su ancho
- `h` que define su alto
> actualmente ambos parametros de tamaño deben ser iguales

### StarRating
Retona las estrellas (5) de una evaluación usando números enteros.
Parametros:
- `rating` el número de estrellas que serán coloreadas

### UserRating
Muestra una foto del usuario con su nombre y calificación de estrellas.
Parametros:
- `picture` link a la foto del usuario
- `name` nombre del usuario
- `review` Calificación del usuario dle 1 al 5

## Containers

### DropDownUser
Está pensado para mostrar las opciones al precionar un menú dropdown de la barra de navegación.
Mostrara dentro de sí los hijos que se le den.

### RatingContainer
Contenedor que contiene reseñas de estudiantes.
Por ahora recibe como parámetro `classID` que determina el número de estudiantes a mostrar pero en el futuró se usará para buscar las opiniones de clases especificas.

### ButtonGroup
Contenedor que recibe botones y los junta dejando los de los rincones con bordo redondeado

## Pages

### Home
Pantalla principal de la aplicación en esta se muestra la barra de navegacion con las opcion de *Ingresar* y *Registrarse*, información de la página y una animación.

### Login
Pagina con la cual se loguea el usuario a la aplicación

### ClassPage
Esta es la página donde se verán las clases, en esta está un video con nombre y autor. La página incluye barra de navegación y una galería con las reviews de los usuarios