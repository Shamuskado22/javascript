var ver = window.document.querySelector('input#verify')
ver.addEventListener('click', verify)

function verify() {
    var date = new Date()
    var year = date.getFullYear()
    var txtyear = window.document.getElementById('txtyear')
    var res = window.document.querySelector('div#res')
    if (txtyear.value.length == 0 || Number(txtyear.value) > year) {
        window.alert('Preencha os campos correntamente')
    } else {
        var rgen = window.document.getElementsByName('radgen')
        var age = year - Number(txtyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        if (rgen[0].checked) {
            gender = 'Homem'
            if (age >= 0 && age < 13) {
                // Criança
                img.setAttribute('src', './img/imgcm.png')
            } else if (age < 35) {
                // Jovem
                img.setAttribute('src', './img/imgjm.png')
            } else if (age < 60) {
                // Adulto
                img.setAttribute('src', './img/imghomem.png')
            } else {
                // Idoso
                img.setAttribute('src', './img/imgidoso.png')
            }
        } else if (rgen[1].checked) {
            gender = 'Mulher'
            if (age >= 0 && age < 12) {
                // Criança
                img.setAttribute('src', './img/imgcf.png')
            } else if (age < 34) {
                // Jovem
                img.setAttribute('src', './img/imgjf.png')
            } else if (age < 59) {
                // Adulto
                img.setAttribute('src', './img/imgmulher.png')
            } else {
                // Idoso
                img.setAttribute('src', './img/imgidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gender} e tem ${age} anos!`
        res.appendChild(img)
    }
}
