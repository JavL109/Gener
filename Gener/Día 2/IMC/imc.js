let altura;
let peso;

altura=window.prompt("Introduce tu altura (metros): ");
peso = window.prompt("Introduce tu peso (Kg): ");

altura = Number(altura);
peso = Number(peso);

let IMC= peso / Math.pow(altura, 2);
alert(`Tu IMC es de ${IMC}`)

if (IMC < 18.5){
    alert("Sufres de bajo peso")
} else if (IMC > 18.5 && IMC <24.9){
    alert("Tu peso es normal")
} else if (IMC > 24.9 && IMC <25.99) {
    alert("Sufres de sobrepeso")
} else if (IMC > 30 && IMC <30.49) {
    alert("Sufres de obesidad leve");
} else if (IMC > 35 && IMC <39.9) {
    alert("Sufres de obesidad moderada")
} else {
    alert("Sufres de obesidad severa")
}