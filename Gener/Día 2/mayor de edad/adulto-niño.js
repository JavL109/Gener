let año;
const actual = 2025;
año = window.prompt("Introducer la fecha de nacimiento: ");
año = Number(año);

edad = actual - año;

console.log(edad)

if (edad >=18){
    alert("Eres mayor de edad, puedes entrar, tienes: " + edad);
} else if (edad <=0) {
    alert("Introduce una fecha válida");
} else {
    alert(`Te quedan ${18-edad} años para ser mayor de edad, no puedes entrar`);
}
