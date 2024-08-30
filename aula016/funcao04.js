function factorial(num) {  // Usando função para calcular 
    let fact = 1           // fatorial usando repetição
    let calc = num
    do {
        fact *= calc
        calc--
    } while (calc > 1)
    return fact
}

let res = factorial(10)

console.log(`O fatorial de 10 é ${res} `);