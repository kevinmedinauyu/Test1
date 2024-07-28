// AND, OR, NOT 

// AND &&

// si tengo dos condiciones en una funcion, al usar && estoy dando la condicio de que ambas deben de ser true para que la operacion salga true


const pedro = {
    edad: 19,
    suscrito: false,
}

function verificacionUser(edad, suscrito) {
    if (edad >= 18 && suscrito) {
        document.write("Felicidades, estas validado como usuario!")
    } else {
        document.write("No eres apto para usar la plataforma ")
    }
}


console.log(verificacionUser(pedro.edad, pedro.suscrito));




function verificacionUser2(edad, suscrito) {
    if (edad >= 18 || suscrito) {
        document.write("Felicidades, estas validado como usuario!")
    } else {
        document.write("No eres apto para usar la plataforma")
    }
}


console.log(verificacionUser2(pedro.edad, pedro.suscrito));



// Invierte el valor de true a false en una variable o dato
console.log(!pedro.suscrito);
