function oddeven(num) {
    if (num%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res1 = oddeven(10)

console.log(`O valor é ${res1}`);

let res2 = oddeven(11)

console.log(`O valor é ${res2}`);