var count = window.document.getElementById('counter')
count.addEventListener('click', counter)

function counter() {
    var start = window.document.getElementById('start')
    var end = window.document.getElementById('end')
    var step = window.document.getElementById('step')
    var res = window.document.querySelector('div#res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        window.alert('Preencha os dados')
        res.innerHTML = 'Não é possível contar'
    } else {
        res.innerHTML = `Contagem: `
        start = Number(start.value)
        end = Number(end.value)
        step = Number(step.value)
        if (step <= 0) {
            window.alert('Passo inválido! Passo agora é 1')
            step = 1
        }
        if (start < end) {
	        for (var go = start; go <= end; go += step) {
	            res.innerHTML += `${go} ➡️ `
	        }
        } else {
            for (var go = start; go >= end; go -= step) {
                res.innerHTML += `${go} ➡️ `
            }
        }
        res.innerHTML += ` 🏆`
    }
}

