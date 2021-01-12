/*
Case sensitive = reconhece letras maiúsculas e minúsculas

Por tag: getElementByTagName()
Por id: getElementById()
por nome: getElementsByName
por classe: getElementsByClass
por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') //Se fosse uma classe, seria '.email'
let assunto = document.querySelector('#assunto')
let mapa = document.getElementById('mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        //alert('nome inválido') //Para que o alerta não fique aparecendo, outra forma será usada
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    }
    else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    }
    else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.getElementById('txtAssunto')
    if (assunto.value.length > 100){
        txtAssunto.innerHTML = assunto.value.length
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    }
    else{
        //txtAssunto.innerHTML = (100-assunto.value.length)
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk==true && emailOk==true && assuntoOk==true){
        alert('Formulário enviado com sucesso')
    } else{
        alert('Preencha o formulário corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}