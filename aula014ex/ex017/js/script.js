var gene = window.document.getElementById('generate')
gene.addEventListener('click', generate)
var option = window.document.getElementsByTagName('option')[0]
option.style.opacity = '60%'

function generate() {
    var num = window.document.getElementById('num')
    var table = window.document.getElementById('table')
    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        num = Number(num.value)
        table.innerHTML = ''
        for (var calc = 1; calc <= 9; calc++){
            var item = document.createElement('option')
            item.text = `${num} x ${calc} = ${num*calc}`
            table.appendChild(item)
        }
    }
}