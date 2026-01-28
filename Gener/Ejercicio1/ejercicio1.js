let nombre = "Javier";
let edad=16;
let color_pelo = "rubio";
let tipo_pelo = "rizado";
let color_ojo = "marrón";

console.log(nombre,edad,color_pelo,tipo_pelo,color_ojo)
alert("Soy "+nombre+ ", mi edad es "+edad+" años. Tengo un pelo "+tipo_pelo+" de color "+color_pelo+". Y mis ojos son de color "+color_ojo);
alert(`Soy ${nombre}, mi edad es ${edad} años. Tengo un pelo ${tipo_pelo} de color ${color_pelo}. Y mis ojos son de color ${color_ojo}`);

nombre = window.prompt("Me llamo: ");
edad = window.prompt("Mi edad es de: ");
color_pelo = window.prompt("El color de mi pelo es: ");
tipo_pelo = window.prompt("El tipo de mi pelo es: ");
color_ojo = window.prompt("El color de mis ojos es: ");

alert(`Soy ${nombre}, mi edad es ${edad} años. Tengo un pelo ${tipo_pelo} de color ${color_pelo}. Y mis ojos son de color ${color_ojo}`);