/*function check() {
    var n1 = document.querySelector('input#n1')
    var n2 = document.querySelector('input#n2')
    var n3 = document.querySelector('input#n3')
    var res = document.querySelector('div#res')

}*/

function confere() {
    var n1 = document.querySelector('input#n1')
    var n2 = document.querySelector('input#n2')
    var n3 = document.querySelector('input#n3')
    var res = document.querySelector('div#res')
    var cont = 0
    if (n3.value == 0) {
        window.alert('Erro, passo 0 é inválido, então consideraremos o passo como 1')
        n3.value = 1
    } 
    for (var c = Number(n1.value); c <= Number(n2.value); c+= Number(n3.value)) {
        if (cont == 0) {
            res.innerHTML = `${n1.value} &#x1F449 `
            cont = Number(n1.value) + Number(n3.value)
        } else {
        res.innerHTML+= ` ${cont} &#x1F449`
        cont+= Number(n3.value)  } }
    res.innerHTML+= '   &#x1F3F4 '    
}
