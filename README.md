# Coffee Market

Un e-commerce barista como trabajo práctico para el curso de ReactJS de [Coderhouse](https://www.coderhouse.com/online/reactjs).

# Demo
* [Live](https://coffee-market.netlify.app/).
* [Vídeo Desktop](https://www.awesomescreenshot.com/video/5433988?key=dc6fb63767538f50cc10d7476464cfe7).
* [Vídeo Mobile](https://drive.google.com/file/d/16V86c0PcccVkO6T0UwPScGSoKRYGimvL/view?usp=sharing).

# Librerías de terceros

## [Bootstrap](https://getbootstrap.com/)

Decidí usar este framework de css para un prototipado rápido de cada pantalla y poder hacer foco en la funcionalidades del commerce y en el aprendizaje de React.
No se importó ninguna librería o JavaScript adicional para manejar el comportamiento de los componentes de Bootstrap, sino que se hicieron manualmente como es el caso del `navbar-toggle`.
En un caso de uso real se emplearía algún framework más chico o estilos personalizados empleando `flex` o `grid` para el layout.

## [Bootstrap Icons](https://icons.getbootstrap.com/)

Siguiendo la línea del prototipado rápido se incluyó este set de _font icons_ para agregar indicadores visuales en la UI. 
Para un desarrollo productivo seguramente armaría un set reducido de íconos mediante [Fontello](https://fontello.com/).

## [env-cmd](https://github.com/toddbluhm/env-cmd)

Para generar variables de entorno en un `.env` y no publicar credenciales de acceso a Firebase/Firestore.

# Customización

El proyecto se generó inicialmente empleando [Create React App](https://github.com/facebook/create-react-app) pero posteriormente se hicieron las siguientes tareas:

* [x] Reset de la carpeta `.git`.
* [x] Reordenamiento de carpetas.
* [x] Customización de `README.md`.
* [x] Personalización `public/index.html` (se agregaron metatags para SEO).
* [x] Ajuste de `public/manifest.json`.
* [x] Eliminar Core Web Vitals (no aplica para este tipo de proyectos).
* [x] Eliminación de comentarios.


# Instalación

### 1. Clonar el repositorio
```
git clone https://github.com/fedesoriadev/coderhouse-ecommerce.git
cd coderhouse-ecommerce
```
### 2. Instalar dependencias
Se recomienda emplear la última versión de [NodeJS](https://nodejs.org/en/). Sí ya tenés una versión de Node instalada más antigua, se puede usar [nvm](https://github.com/nvm-sh/nvm) para switchear de versiones.
```
npm install
```
### 3. Variables de entorno
Aquí se pegan las credenciales de lectura de Firebase/Firestore provistas de manera privada.
``` 
cp .env.example .env
```
### 4. Iniciar server local
```
npm start
```


# Otras consideraciones
1. Se respetaron los nombres de algunos componentes clásicos de los desafíos como `ItemListContainer` pero se englobaron en carpetas con nombres más lógicos, tales como:
    * **Catalog**: todo lo referente a categorías y listado de items.
    * **Product**: componentes para el detalle de un item.
    * **Cart**: funcionalidades de productos en el carrito.
    * **Checkout**: formulario de datos de usuario y orden de compra
    * **Layout**: componentes globales o de UI
    * **Pages**: páginas separadas como la de 404
2. Otras funcionalidades que no son estrictamente componentes fueron movidas por fuera de `components`:
    * **contexts**
    * **resources**
    * **services**
3. Consideraciones sobre el código:
    * Variables, folders y files en inglés.
    * Contenido del sitio en castellano.
    * Hice _destructuring_ en los casos convenientes para no repetir
    * Traté de seguir un paradigma funcional al emplear soluciones como `reduce`, `map` y `filter`
4. La home del proyecto es el listado completo de productos
5. Las categorías del `NavBar` son dinámicas y filtran los items mediante _where_
6. El detalle de item hace un fetch usando `.doc(id)`
7. Al carrito se puede acceder siempre a través de `/cart`. Si no existen items se muestra un mensaje de carrito vacío.
8. Se generó una _página de 404_ y se emplear en rutas inexistentes o cuando el parámetro de Categoría o Item no existe.
9. Opté por validar el formulario de datos de usuario manualmente empleando expresiones regulares como un forma de practicar. Para casos productivos emplearía una librería de terceros.
10. Limité el uso de contextos a funciones o cálculos auxiliares globales entre componentes.


