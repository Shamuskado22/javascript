var add = window.document.getElementById('add')
var finish = window.document.getElementById('finish')
add.addEventListener('click', ADD)
finish.addEventListener('click', FINISH)

var num = window.document.getElementById('num')
var added = window.document.getElementById('added')
var res = window.document.querySelector('div#res')
var values = []


function nValid(n) {
    if (Number(n) < 1 || Number(n) > 100) {
        window.alert('Escolha um número de 1 à 100')
    } else {
        return true
    }
}

function nListed(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function ADD() {
    if (num.value.length == 0) {
        window.alert('Digite um número')
    } else if (nValid(num.value) && nListed(num.value, values)) {
        values.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        added.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor já existente')
    }
    num.value = ''
    num.focus()
}

function FINISH() {
    if (values.length == 0) {
        window.alert('Adicione um número')
    } else {
        var greater = values[0]
        var lesser = values[0]
        var sum = 0
        var average = 0
        for (var pos = 0; pos < values.length; pos++) {
            sum += values[pos]
            if (values[pos] > greater) {
                greater = values[pos]
            }
            if (values[pos] < lesser) {
                lesser = values[pos]
            }
        }
        average = sum / values.length
        res.innerHTML = `<p>Ao todo, temos ${values.length} valores adicionados.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${greater}.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${lesser}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${sum}.</p>`
        res.innerHTML += `<p>A média dos valores adicionados é ${average}</p>`
    }
}