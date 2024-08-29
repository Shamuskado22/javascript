var gene = window.document.getElementById('generate')
gene.addEventListener('click', generate)

function generate() {
    var num = window.document.getElementById('num')
    var res = window.document.querySelector('textarea#tabu')
    res.innerHTMLText = Number(num.value)
}