# PokeApi

Frontend hecho en Angular para prueba técnica en empresa Sithec

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Como utilizar el sistema
- La pantalla principal muestra el listado de pokemones que se obtienen del API, esta pantalla tiene implementado scroll infinito para que al llegar
al punto más bajo de la página haga de nuevo la petición y obtenga nuevos pokemones.
- Cada tarjeta de pokemón tiene un corazón, al dar click a ese corazón se agrega el pokemón a tu lista de favoritos, al dar click al corazón cuando ya está ese pokemón en favoritos elimina el pokemón de tu lista de favoritos. La lista de favoritos funciona sin internet.
- En la sección "Bookmarked pokemon" están todos los pokemón que has agregado a tus favoritos.
- Al dar click a la tarjeta de un pokemón en cualquiera de los 2 listados (listado principal o listado de favoritos) se muestra la información del pokemón seleccionado.
- El sistema tiene implementado máscaras de carga que se muestran mientras se realizan las peticiones http.
