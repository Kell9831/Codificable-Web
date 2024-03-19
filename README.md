# Proyecto: Componentes Javascript

## Recursos

- <a href="https://github.com/orgs/codeableorg/projects/175" target="_blank">Tablero Kanban</a>
- <a href="https://www.figma.com/file/gO1WgnPpKHkH92eqWroSQp/JavaScript-Components?type=design&node-id=701%3A4008&mode=design&t=ZTo4EFBqGiXZxxx2-1" target="_blank">Diseños en Figma</a>

## El Proyecto

El proyecto consiste en 3 desafíos, en incremento de dificultad. Trabajaremos sobre la web de Codificable para agregar pequeñas funcionalidades y agregaremos dos artículos par presentar dos componentes que usan JavaScript intensamente para funcionar.

## Nuevas funcionalidades

### Menú desplegable en móviles

En pantallas pequeñas, parte del header (los links de navegación y el botón de login) desaparece y es reemplazado por un botón de menú. Hasta ahora, este botón no tenía funcionalidad. Su tarea es:

- Crear el menú es su versión móvil
- Hacer que aparezca y desaparezca cuando se presiona el botón
- El ícono del botón también debe cambiar

<video controls className="rounded-lg">
  <source src="https://res.cloudinary.com/dwdgpw20b/video/upload/v1696516794/illustrations/mobile-menu_wva1do.mov" type="video/mp4" />
</video>

### Login Modal

Otro aspecto de la web que no funcionaba era el botón de login. El desafío es que al presionar el botón aparezca un "Modal" en la pantalla con el formulario de login:

- Un fondo negro semitransparente debe cubrir toda la pantalla del usuario.
- Un contenedor de fondo blanco de estar centrado en la pantalla.
- El contenedor debe tener un botón con un ícono de "X" situado en la parte superior derecha.
- Al presionar la "X" el modal debe desaparecer

<video controls className="rounded-lg">
  <source src="https://res.cloudinary.com/dwdgpw20b/video/upload/v1696519361/illustrations/modal_g6ezvw.mov" type="video/mp4" />
</video>

## Artículo: Temporizador con JavaScript

Deberán crear un articulo tutorial de cómo crear un componente "Temporizador" utilizando HTML, CSS y JavaScript.

Los requerimientos son los siguientes:

- Al iniciar, solo el input de segundos y el botón de empezar están activos. El resto de botones están deshabilitados.
- A medida que escribes segundos en el input, el indicador grande de segundos refleja la misma cantidad.
- Al presionar Empezar, el input de segundos y el botón de Empezar se deshabilitan. Los botones Pausar y Detener se habilitan y el contador temporizador inicia.
- Al presionar Pausar el temporizador debe detenerse y el texto del botón debe cambiar a Continuar
- Ya sea que el temporizador llegue a 0 o que presionas el botón Detener, todo se reinicia al estado inicial.

<video controls className="rounded-lg">
  <source src="https://res.cloudinary.com/dwdgpw20b/video/upload/v1696521856/illustrations/timer_qbcdnf.mov" type="video/mp4" />
</video>

## Artículo: Calculadora con JavaScript

Deberán crear un articulo tutorial de cómo crear un componente "Calculadora" utilizando HTML, CSS y JavaScript. Observen el siguiente video para que tengan una idea de cómo debe funcionar:

<video controls className="rounded-lg">
  <source src="https://res.cloudinary.com/dwdgpw20b/video/upload/v1696523840/illustrations/calculator_hhlcng.mov" type="video/mp4" />
</video>

### Recomendaciones para la implementación

La calculadora puede gestionar 3 variables:
- ``numeroPrevio``: empieza en `""`
- `operador`: empieza en `""`
- `numeroActual`: empieza con `"0"`

En cualquier momento, la calculadora debe mostrar la **"operación actual"**. La operación actual se puede definir como la concatenación de `numeroPrevio` + `operador` + ``numeroActual`` (aquí el símbolo '+' significa concatenación).

**Algunos ejemplos:**

- `numeroPrevio`: "", `operador`: "", `numeroActual`: "10"
  - **Operación actual:** `"10"`

- `numeroPrevio`: "10", `operador`: "+", `numeroActual`: ""
  -  **Operación actual:** `"10+"`

### El usuario puede agregar dígitos

Por lo general, cada vez que el usuario haga clic en un botón de dígito (0...9), el valor se concatena al `numeroActual`. Algunas consideraciones:

- Si `numeroActual` es "0", hacer clic en un número del 1 al 9 reemplaza el numero actual por dicho número.
- Si `numeroActual` es "0", hacer clic en el botón "0" nuevamente no hace nada.
- Si el usuario hace clic en el punto (.), se agregará un punto decimal al `numeroActual`.
- Si un punto decimal ya está presente en `numeroActual`, hacer clic en el punto nuevamente no hace nada.


### El usuario puede agregar un `operador`

Cuando el usuario hace clic en un botón de `operador` (÷, ×, -, +), el `operador` debe establecerse en ese valor, `numeroPrevio` debe tomar el valor de `numeroActual` y `numeroActual` debe establecerse como un string vacío.

- Si el `operador` ya tiene un valor (no es nulo), hacer clic en un botón de `operador` debe reemplazar el valor del `operador` actual.


### El usuario puede hacer un cálculo

Cuando el usuario hace clic en el botón de cálculo (=), se debe calcular la operación actual y `numeroActual` debe establecerse en el resultado, `numeroPrevio` y `operador` deben establecerse en string vacío.

- Si `numeroActual` es un string vacío cuando se hace clic en el botón de cálculo, se deberá tomar el valor de `numeroPrevio` como `numeroActual` y calcular la operación.

### El usuario puede eliminar un dígito

Cuando el usuario hace clic en el botón de borrar (⌫), se debe eliminar el último dígito de `numeroActual`.

- Si `numeroActual` tiene solo 1 dígito y `numeroPrevio` y `operador` son strings vacíos, `numeroActual` debe cambiar a "0".
- Si `numeroActual` tiene solo 1 dígito pero `numeroPrevio` y `operador` no son nulos, `numeroActual` debe establecerse en `""`.
- Si `numeroActual` es un string vacío y `numeroPrevio` y `operador` no son strings vacíos, entonces `numeroActual` toma el valor de `numeroPrevio` y `numeroPrevio` y `operador` deben establecerse en string vacío.

### El usuario puede restablecer la calculadora

Cuando el usuario hace clic en el símbolo C, todos los valores vuelven al estado inicial.
