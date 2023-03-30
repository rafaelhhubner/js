let num = window.document.getElementById('fnum')
let lis = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let vetor = []
let c = 0
let d = 0
let contador = 0
let soma = 0

function adicionar() {
    let n = Number(num.value)
    res.innerHTML = ''
    d = 0
    if (num.length == 0 || n < 1 || n > 100) {
        window.alert('[ERRO], digite um valor válido')
    } else if (vetor.indexOf(n) != -1) {
        window.alert('Não repita os valores!!!')
    } else {
        vetor.push(n)
        item = document.createElement('option')
        item.text = `O valor ${vetor[c]} foi adicionado`
        lis.appendChild(item)
        c++
    }
    return vetor
}

function finalizar() {
    let n = Number(num.value)
    vetor.sort()
    let length = vetor.length
    while (d <= vetor.length) {
        if (contador == 0) {
            contador = vetor[d]
        } else if (vetor[d]){
        }
        soma += vetor[d]
        d++
    }
    let media = soma / vetor.length
    res.innerHTML = `Ao todo, temos ${length} números cadastrados.
    <br> O maior valor informado foi ${vetor[length]}
    <br> O menor valor informado foi ${vetor[0]}
    <br> Somando todos os valores, temos ${soma.value}
    <br> A média dos valores digitados é ${media}
    <br> ${vetor}
    `
}
