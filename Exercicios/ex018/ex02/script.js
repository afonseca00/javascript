function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente outra vez`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //img 
        img.setAttribute('id', 'foto') //img com id foto
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/h_bebe.jpg')
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', 'imagens/h_jovem.jpg')
            } else if (idade >= 18 && idade < 50) {
                img.setAttribute('src', 'imagens/h_adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/h_idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/m_bebe.jpg')
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', 'imagens/m_jovem.jpg')
            } else if (idade >= 18 && idade < 50) {
                img.setAttribute('src', 'imagens/m_adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/m_idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}