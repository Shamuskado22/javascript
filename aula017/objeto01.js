let amigo = {
    nome: 'José', 
    sexo: 'Masculino', 
    peso: 80.3, 
    engordar(p=0){
        console.log('Engordou');
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`Seu amigo ${amigo.nome} é do sexo ${amigo.sexo} e pesa ${amigo.peso}`);
