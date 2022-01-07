# StoreClass
Clase Store creada con Nodejs, test realizado con Mocha, para su ejecucion es necesario instalar Node JS en su verison LTS y NPM como manejador de paquetes.

## Como iniciar

`$ npm install` ➜  Instalar dependencias
`$ npm test` ➜  Iniciar prueba

#### Resultados

1. `open_cases` ➜ Casos abiertos entre las fechas indicadas (start_date,finish_date).
2. `solved_cases` ➜ Casos resuletos entre las fechas indicadas (start_date,finish_date).
3. `average_solution:` ➜ Horas promedio para resolver cada caso entre las fechas indicadas (start_date,finish_date).
4. `maximun_solution` ➜ El tiempo maximo, que se tardo en resolver un caso, si existen casos sin resolver se calcula tomando como fecha de finalizacion la fecha actual (start_date,finish_date).

#### Configuracion

1. Cambiar parametros
  - fecha inicial modificar start_date ➜ `./parameters.json`
  - fecha final modificar finish_date ➜ `./parameters.json`
2. Cambiar data a evaluar ➜ `./incidents.json`:
  - status valores validados ➜ `open | solved` requerido
  - solved_date formato valido ➜ `YYY-MM-DD HH:mm:ss` *
  - open_date formato valido ➜ `YYY-MM-DD HH:mm:ss` requerido
  *`Los casos que tengan status solved y no tengan solved_date seran ignorados`
