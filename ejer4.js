
let a= prompt("INGRESE SU NUMERO");
let elements = [3, 6, 9, 7, 1, 6];

let i = 0, j = 1, sum;
let sais = elements.length;
let order = "A PARIR DEL ARREGLO IMPRIMIR LOS ELEMENTOS QUE SUMANDOS ENA IGAUALES A LA VARIABLE X"
console.log(order, elements);

for (i; i < sais; i++) {
    j = i + 1;
    if (i < sais) {
        for (j; j < sais; j++) {
            sum = (elements[i] + elements[j]);
            if (sum == a) {
                console.log("LOS INDICES SUMANDOS SON ",a , " son: ", i, j);
            }
        }

    } else {
        alert("NINGUNO DE STOS INDICES SUMADOS SON IGUALES A: ", a);
    }
}