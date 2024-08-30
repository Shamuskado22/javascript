//Recursividade
function factorial(num) {
    if (num == 1) {
        return 1
    } else {
        return num * factorial(num-1)
    }
}

let res = factorial(8)

console.log(`O fatorial de 8 é ${res}`);