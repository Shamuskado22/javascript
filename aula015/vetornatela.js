let value = [9, 7, 8, 6, 5, 3, 4, 2, 1, 0]
// value.sort()
// console.log(value);

// for (let pos = 0; pos < value.length; pos++) {
//     console.log(`A chave ${pos} tem o valor ${value[pos]}`);
// }

// for (let pos in value) {
//     console.log(`A chave ${pos} tem o valor ${value[pos]}`);
// }
let num = 8
let key = value.indexOf(8)

if (key == -1) {
    console.log('Chave não encontrada');
} else {
    console.log(`O valor ${num} está na chave ${key}`);
}

