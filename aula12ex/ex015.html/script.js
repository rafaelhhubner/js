function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/h1-500.png')
            } else if (idade > 10 && idade < 21) {
                img.setAttribute('src', 'imagens/h2-500.png')
            } else if (idade > 21 && idade < 50) {
                img.setAttribute('src', 'imagens/h3-500.png')
            } else {
                img.setAttribute('src', 'imagens/h4-500.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/m1-500.png')
            } else if (idade > 10 && idade < 21) {
                img.setAttribute('src', 'imagens/m2-500.png')
            } else if (idade > 21 && idade < 50) {
                img.setAttribute('src', 'imagens/m3-500.png')
            } else {
                img.setAttribute('src', 'imagens/m4-500.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}