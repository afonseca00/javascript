function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossivel contar`
    } else {
       res.innerHTML = 'Contando: <br>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p <= 0) {
        window.alert('Passo inválido! Considerando Passo 1')
        p = 1
       }
       if (i < f) {
        //Forma crescente
        while (i <= f) {
            res.innerHTML += ` ${i} \u{1F449}`
            i = i + p
        }
       } else {
        //Forma decrescente
        while (i >= f) {
            res.innerHTML += ` ${i} \u{1F449}`
            i = i - p
        }
       }
       res.innerHTML += `\u{1F3C1}`
    }
}