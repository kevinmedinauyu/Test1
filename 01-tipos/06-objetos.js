//  Personaje de TV

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

// {} => Objeto literal 

let personaje = {
    nombre: nombre,
    anime: anime,
    edad: edad,
}

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);


personaje.edad = 13;
let nuevaEdad = personaje["edad"] = 15; 

console.log(nuevaEdad);

delete personaje.anime;

console.log(personaje);
