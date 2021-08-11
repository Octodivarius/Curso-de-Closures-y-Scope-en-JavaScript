/* El Local Scope: se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entrono en donde conviven.

El ambito lexico: se refiere a que una funcion puede acceder a una funcion o variable fuera de ella.Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas. */

const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();

console.log(hello);


var scope = "I am Global";

const functionScope = () => {

    var scope = "I am just a local";
    const func = ()=>{
        return scope
    }
    console.log(func());
};

    
functionScope();
console.log(scope);

