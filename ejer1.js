
let numbers = [3, 5, 4, 3, 2, 1, 8, 9];
let conts = 0;

do {
    console.log(conts + 1, "(", numbers[conts], ")", conts);
    conts++;
}
while (conts < numbers.length);

console.log("EL TAMAÑO DEL ARREGLO ES " + conts + "unidades");
