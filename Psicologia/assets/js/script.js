/*varáveis*/
let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.getElementById('assunto')
let botaoEnviar = document.getElementById('botaoEnviar')

let nomeOK = false
let emailOK = false
let assuntoOK = false

/*funções*/
function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = 'red'
        txtNome.style.display = 'block'
        nomeOk= false
    }
    else{
        txtNome.style.display = 'none'
        nomeOK= true
    }
}

function validaEmail(){
    let txtEmail = document.getElementById("txtEmail")
    if (email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        txtEmail.style.display = 'block'
        emailOK = false
    }
    else{
        txtEmail.style.display = 'none'
        emailOK = true
    }
}

function validaAssunto(){
    let txtAssunto = document.getElementById('txtAssunto')
    if (assunto.value.length > 500){
        txtAssunto.innerHTML =  "Caracteres acima do permitido: " + (assunto.value.length-500)
        txtAssunto.style.color = 'red'
        assuntoOK = false
    }
    else{
        txtAssunto.innerHTML = 'restam ' + (500-assunto.value.length) + " caracteres"
        txtAssunto.style.color = 'green'
        assuntoOK = true
    }
}

function validaEnviar(){
    if (nomeOK==true && emailOK==true && assuntoOK==true ){
        botaoEnviar.style.visibility = 'visible'
    } else{
        botaoEnviar.style.visibility = 'hidden'
    }
}

function enviar(){
    if (nomeOK==true && emailOK==true && assuntoOK==true ){
        alert("Formulário enviado com sucesso")
    }
    else{
        alert('Preencha o formulário corretamente')
    }
}