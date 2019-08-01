let div = document.querySelector("div")
let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let confirmacaoEmail= document.querySelector("#confirmarEmail")
let senha = document.querySelector("#senha")
let botao = document.querySelector("#acessar")
let genero = document.querySelector("#genero")
let resposta = document.querySelector("p")
let ficha = document.querySelector("h2")
let dados = document.querySelector("#dados")
let aside = document.querySelector("aside")
let imagem = document.querySelector("img")

aside.style.display = "none"

function cadastro(){
   if(email.value == confirmacaoEmail.value){
        localStorage.setItem('nome',nome.value);
        localStorage.setItem('genero',genero.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('confirmarEmail',confirmacaoEmail.value);
        localStorage.setItem('senha',senha.value); 
        fichaDeCadastro();
    }
    else{
        resposta.innerHTML = "Confirmação de Email invalida";
    }
}

function fichaDeCadastro(){
    aside.style.display = "initial"
    div.style.display = "none";
    ficha.innerHTML = `Ficha De Cadastro`;
    dados.innerHTML = `Seja bem vindx ${localStorage.nome}!! Seu cadastro em nosso site foi efetuado com sucesso e agora você poderá garantir todas as novidades de nossa loja!`;
} 

botao.onclick = cadastro;