function load() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("hour");
  var data = new Date();
  var hora = data.getHours()
  
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    // Bom Dia!
    img.src = './img/manha.png'
    document.body.style.backgroundColor = '#e98a2b93'
  } else if (hora >= 12 && hora < 18) {
    // Boa Tarde!
    img.src = './img/tarde.png'
    document.body.style.backgroundColor = '#CB2F0193'
  } else {
    // Boa Noite!
    img.src = './img/noite.png'
    document.body.style.backgroundColor = '#031B3793'
  }
}
