let num = document.querySelector('input#fnum')
let sel = document.querySelector('select#flista')
let res = document.querySelector('div#res')
const adc = document.querySelector('#adc')
const fin = document.querySelector('#fin')
valores = []


function isValid(n) {
    if (Number(n) >= 1 && Number(n) <= 100 && n.length != 0) {
        return true
    } else {
        return false
    }
}

function isAlready(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

adc.addEventListener("click", function() {
   if (isValid(num.value) && !isAlready(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado`
        sel.appendChild(item)
   } else {
        window.alert("Valor inválido ou já adicionado!")
   }
   num.value = ''
   res.innerHTML = ''
})

fin.addEventListener("click", function() {
    console.log(valores)
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for(let pos in valores) {
        soma += valores[pos]
        if (maior < valores[pos]) {
            maior = valores[pos]
        } 
        if (menor > valores[pos]) {
            menor = valores[pos]
        }
    }
    media = soma / valores.length

    console.log(maior, menor, soma, media)

    res.innerHTML += `<p>Ao todo temos ${valores.length} valores adicionados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor} </p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores adicionados é ${media}</p>`
})
