let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let confirmacaoEmail= document.querySelector("#confirmarEmail")
let senha = document.querySelector("#senha")
let botao = document.querySelector("#acessar")
let genero = document.querySelector("#genero")
let resposta = document.querySelector("p")

function cadastro(){
   if(email.value == confirmacaoEmail.value){
        localStorage.setItem('nome',nome.value);
        localStorage.setItem('genero',genero.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('confirmarEmail',confirmacaoEmail.value);
        localStorage.setItem('senha',senha.value); 
        resposta.innerHTML="Cadastrado com sucesso"
    }
    else{
        resposta.innerHTML = "Confirmação de Email invalida";
    }
}

botao.onclick = cadastro;