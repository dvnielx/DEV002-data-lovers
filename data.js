//toma dos argumentos y los devuleve en nuevo array
export const filtro = (arr = [], casa) => {
  //devuelve un nuevo arreglo que contiene los elementos del arreglo original que tienen una propiedad house con el valor argumento casa.
  return arr.filter((element) => element.house === casa);
};

export async function obtenerDatos() {
  const url = './data/harrypotter/harry.json';
  const respuesta = await fetch(url); 
  console.log(respuesta) // La respuesta a la solicitud se almacena en la variable respuesta.
  const resultado = await respuesta.json();// Se usa el método json() de la respuesta para convertir la respuesta en un objeto JavaScript. Esto se almacena en la variable resultado
  return resultado.characters;
}

export const orderAZ = (arr) => { 
    let ascendent = arr.sort(function(a, b) { //guarda en ascendent el array ordenado
      return((a.name < b.name)? -1: ((a.name > b.name)? 1: 0)); //valor de la propiedad name del elemento a o b
    })
  return ascendent;
}

export const orderZA = (arr) => {
  let descendent = arr.sort(function(a, b) {
    if(a.name > b.name) { return -1; } // el elemento a se coloca antes que el elemento b 
    if(a.name < b.name) { return 1; } //el elemento b se coloca antes que el elemento a 
    else {
      return 0;
    }
  })
return descendent;
}

export function calcularPorcentaje(datos) {
  let hombres = 0;
  let mujeres = 0;
  for(let i = 0; i < datos.length; i++) {
    if(datos[i].gender === 'Female') {
      mujeres++; 
    } else {
      hombres++; 
    }
  }
  
  let porcentajeMujeres = (mujeres / datos.length) * 100; 
  porcentajeMujeres = porcentajeMujeres.toFixed(1);
  let porcentajeHombres = (hombres / datos.length) * 100;
  porcentajeHombres = porcentajeHombres.toFixed(1);
  return { porcentajeMujeres, porcentajeHombres };

  }

  

