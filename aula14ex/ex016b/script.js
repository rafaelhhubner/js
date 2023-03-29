function contar() {
    var ini = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('pas')
    var res = window.document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Valores faltando'} 
        else {
            res.innerHTML = 'Contando: <br>'
            var i = Number(ini.value)
            var f = Number(fim.value)       
            var p = Number(pas.value)
            if (p == 0) {
            window.alert('Passo 0 seria inviável, portanto o passo será considerado como 1')
            p = 1
            }
            if (f > i) {
                for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            } else if (i > f) {
                for (let c = i; f <= c; c -= p) {
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            }
    res.innerHTML += `\u{1F3C1}`
    }
}