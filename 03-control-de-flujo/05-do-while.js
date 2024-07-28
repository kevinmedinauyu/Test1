// Cuales son los numeros pares

// Do While evalua la condicion al final del recorrido y no al inicio, osea que el buclque, minimo se ejectura una vez

let i = 2;

// while(i < 2 ){
//     if(i % 2 == 0){
//         console.log("Numero par:" + " " + i);
//     }
//     i++
// } 


do {
 if(i % 2 == 0){
    console.log("Numero par:" + " " + i);
 }
 i++;
} while(i < 2);