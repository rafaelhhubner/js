function Tabuada() {
    var num = window.document.getElementById('num')
    var tab = window.document.getElementById('sectab')
    if (num.value.length == 0) {
        window.alert('Erro. Você deve digitar um número')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}