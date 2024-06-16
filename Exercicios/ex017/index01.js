function parimp(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let res = parimp(12)
console.log(`${res}`)