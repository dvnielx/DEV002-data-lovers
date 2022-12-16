//toma dos argumentos y los devuleve en nuevo array
export const filtro = (arr = [], casa) => {
  //devuelve un nuevo arreglo que contiene solo los elementos del arreglo original que tienen una propiedad house con el valor especificado en el argumento casa.
  return arr.filter((element) => element.house === casa);
  //La función de prueba es otra función de flecha que toma un elemento (element) como argumento. Esta función de flecha devuelve true si el elemento tiene una propiedad house con el valor especificado en el argumento casa, y false en caso contrario.
};

export async function obtenerDatos() {
  const url = './data/harrypotter/harry.json';
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return resultado.characters;//.characters, porque en esta ocasion estoy trayendo solo los personajes por la carpeta json
}

export const orderAZ = (arr) => { //toma arreglo como
    let ascendent = arr.sort(function(a, b) { //guarda en ascendent el array ordenado
      return((a.name < b.name)? -1: ((a.name > b.name)? 1: 0));
    })
  return ascendent;
}

export const orderZA = (arr) => {
  let descendent = arr.sort(function(a, b) {
    if(a.name > b.name) { return -1; }
    if(a.name < b.name) { return 1; }
    else {return 0;}
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

  

