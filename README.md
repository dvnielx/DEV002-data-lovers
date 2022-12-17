# Magical Hogwarts Adventures ⚡️

## Índice

* [i. Acerca de "Magical Hogwarts Adventures"](#1-acerca-de-Magical_Hogwarts-Adventures)
* [ii. Historias de Usuario](#2-historias-de-usuario)
* [iii. Prototipos](#3-prototipos)
* [iv. Consideraciones generales](#4-consideraciones-generales)
* [v. Listado de problemas que detectaste a través de tests de usabilidad](#v-listado-de-problemas-que-detectaste-a-través-de-tests-de-usabilidad)


***

## i. Acerca de Magical Hogwarts Adventures

El proyecto _"Magical Hogwarts Adventures"_ surge con la finalidad de brindar a las usuarias –fans de Harry Potter– un espacio virtual e interactivo en donde podrán explorar de forma eficiente y organizada, las diferentes escuelas que conforman el Colegio de Magia y Hechicería Howgarts y podrán conocer a todos los personajes que aparecen en la saga de libros de Harry Potter. 


## ii. Historias de Usuario

Las historias de usuario las realizamos en función de los hallazgos de la investigación con seguidoras de Harry Potter que se nos brindó para este proyecto.

Nuestras Historias de Usuario fueron 5:

1. **HU Casas.** Como seguidora de Harry Potter quiero ver las diferentes escuelas que conforman el Colegio Hogwarts de Magia y Hechicería con sus respectivos escudos para conocerlos a detalle. 

**Criterios de aceptación:** 

    *La página es responsive (desktop & mobile).

    *La página muestra con imágenes/logos las 4 escuelas del Colegio Hogwarts de Magia y Hechicería.

    *Fiel a prototipo.

    *Los logos/escudos están dentro de un contenedor main y funcionan como links.


**Definición de terminado:**

    *La página se puede abrir con las mismas funcionalidades en celulares, tablets y pc.

    *La página muestra dentro de un contenedor main los escudos de las 4 escuelas.

    *La interfaz de la página es igual (con pequeñas modificaciones) al prototipo de alta fidelidad.

    *Pasa los tests necesarios.


2. **HU Personajes:** Como seguidora de Harry Potter, quiero visualizar a todos los personajes de las diferentes casas del Colegio Hogwarts de Magia y Hechicería para conocerlos.

**Criterios de aceptación:** 

    *La página es responsive (desktop & mobile).

    *La página muestra un botón que permite a la usuaria acceder a la base de datos organizada en contenedores con todos los personajes de la saga, con nombre completo y especie.

    *Fiel a prototipo.

**Definición de terminado:**

    *La página se puede abrir con las mismas funcionalidades en celulares, tablets y pc.

    *La página muestra un botón que dirige a una sección con todos los personajes contenidos, cada uno, en una tarjeta.

    *Pasa los tests necesarios.

    *Visualmente es fiel a prototipo.

3. **HU Personajes filtrados:** Como seguidora de Harry Potter, quiero visualizar a los personajes  casas del Colegio Hogwarts de Magia y Hechicería  en función de la escuela a la que pertenecen para conocer a qué escuela asiste cada uno de ellos.

**Criterios de aceptación:** 

    *La página es responsive (desktop & mobile).

    *La página le permite a la usuaria acceder a la base de datos a través del escudo de cada escuela. Esta muestra a los personajes de cada una de las escuelas con nombre completo, escuela a la que pertenece y especie.

    *Fiel a prototipo.

**Definición de terminado:**

    *La página se puede abrir con las mismas funcionalidades en celulares, tablets y pc.

    **La página muestra con imágenes/logos las 4 escuelas del Colegio Hogwarts de Magia y Hechicería en un contenedor y al momento de dar click a cada escudo dirige a los personajes que pertenecen a esa escuela.

    *Pasa los tests necesarios.

    *Visualmente es fiel a prototipo.


4. **HU Personajes ordenados alfabeticamente:** Como seguidora de Harry Potter, quiero visualizar a todos los personajes de las diferentes casas del Colegio Hogwarts de Magia y Hechicería ordenados alfabeticamente en orden ascendente (A-Z) para que la data sea más amigable de explorar.

**Criterios de aceptación:** 

    *La página es responsive (desktop & mobile).

    *La página le permite a la usuaria ordenar de forma alfabetica (A-Z) los nombres de los personajes.

    *Fiel a prototipo.

**Definición de terminado:**

    *La página se puede abrir con las mismas funcionalidades en celulares, tablets y pc.

    **La página muestra un ícono que que al darle click ordena automáticamente a todos los personajes alfabeticamente (A-Z).

    *Pasa los tests necesarios.

    *Visualmente es fiel a prototipo.


5. **HU Porcentaje de mujeres y hombres:** Como seguidora de Harry Potter, quiero visualizar el porcentaje de mujeres y de hombres del total de los personajes de la saga de HP.

**Criterios de aceptación:** 

    *La página es responsive (desktop & mobile).

    *La página le permite a la usuaria obtener el porcentaje de mujeres y de hombres del total de personajes de la saga de Harry Potter.

    *Fiel a prototipo.

**Definición de terminado:**

    *La página se puede abrir con las mismas funcionalidades en celulares, tablets y pc.

    **La página muestra un botón que que al darle click muestra el porcentaje de mujeres y de hombres de los personajes de la saga de Harry Potter. 

    *Pasa los tests necesarios.

    *Visualmente es fiel a prototipo.

## iii. Prototipos

* Prototipo de baja fidelidad

![img](./src/images/Prototipos/HU%20Casas%20.png)
![img](./src/images/Prototipos/HU%20Personajes.png)
![img](./src/images/Prototipos/HU%20Personajes%20Filtrados.png)
![img](./src/images/Prototipos/HU%20Orden%20A-Z%20y%20HU%20Porcentajes.png)

* Prototipo de alta fidelidad

![img](./src/images/tinified/Prototipo%20alta%20fidelidad%20mobile.png)
![img](./src/images/tinified/Prototipo%20alta%20fidelidad%20desktop.png)

## iv. Proyectos desplegados

💻 Laura: https://laugardc.github.io/DEV002-data-lovers/ 
💻 Daniela: https://dvnielx.github.io/DEV002-data-lovers/ 

## v. Listado de problemas que detectaste a través de tests de usabilidad

    *Las lineas 6-9 en data.js no estan cubiertas en los test, ya que utilizamos el método Fetch para traer los datos, pues inicialemnte estábamos trabajando con la url de la API, sin embargo, el servidor dejó de funcionar y trajimos los datos desde la carpeta .json del repositorio. Conservamos comentada la url de la API por si en algun momento volvía a funcionar y poder hacer la llamada correspondiente para trabajar con dicho código. 
    *Nos faltó crear los test para los errores.