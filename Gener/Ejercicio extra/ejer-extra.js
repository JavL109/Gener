let nombre;
let lugar;
let hora;
let nombre2;
let accion;


nombre = window.prompt("Iba caminando (nombre): ")
lugar = window.prompt("Con dirección hacia: ")
hora = window.prompt("La hora marcaba las: ")
nombre2 = window.prompt("Esperaba encontrarse con: ")
accion = window.prompt("Cuando se encuentren van a (acción): ")

alert(`Se encontraba caminando ${nombre} rumbo a ${lugar} para encontrarse con ${nombre2}. El reloj marcaba las ${hora}. ${nombre} Se encontraba ansioso por poder ${accion} junto a ${nombre2}`)