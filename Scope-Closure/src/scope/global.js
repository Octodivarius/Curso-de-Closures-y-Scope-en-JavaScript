//Scope es el alcance de las variables que estamos nosotros asignando


var hello = 'Hello'; //Se puede acceder a esta variable todo e tiempo porque esta asignada de forma global, no esta dentro de ninguna funcion o bloque
var hello = 'Hello +';//con var sobre escribe los valores que estaban antes
let world = 'Hello World'; 
//let wolrd  = 'Hello World + '//con let y const no se puede asignar nuevo valor
const helloWorld = 'hello World!'
console.log(hello);


const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);

}

anotherFunction();

