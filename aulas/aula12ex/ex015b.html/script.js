let ver = document.querySelector("#btn")

ver.addEventListener("click", function() {
    const data = new Date()
    const ano = data.getFullYear()
    const nano = document.querySelector("#iano")
    let res = document.querySelector("#res")
    if(nano.lenght === 0 || Number(nano.value) <= 0 || Number(nano.value) > ano) {
        window.alert("Digite um ano válido")
    } else {
        let radsex = document.getElementsByName("radsex")
        let gênero = ''
        let artigo = ''
        let idade = ano - Number(nano.value) 
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radsex[0].checked) {
            artigo = "um"
            gênero = "homem"
            if (idade < 10) {
                img.setAttribute('src', 'imagens/h1-500.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/h2-500.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'imagens/h3-500.png')
            } else {
                img.setAttribute('src', 'imagens/h4-500.png')
            } 
        } else if (radsex[1].checked) {
            artigo = "uma"
            gênero = "mulher"
            if (idade < 10) {
                img.setAttribute('src', 'imagens/m1-500.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/m2-500.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/m3-500.png')
            } else {
                img.setAttribute('src', 'imagens/m4-500.png')
            }
        }
        res.innerHTML = `Detectamos ${artigo} ${gênero} com ${idade} anos` 
        res.appendChild(img)
    }
    
})