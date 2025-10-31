const porti = document.querySelector("#porti")
const brea = document.querySelector("#portitwo")
const barra = document.querySelector("#label")
const butão = document.querySelector("#input-enviar")
const body = document.querySelector("#bd")

porti.style="font-size:350%; margin-left: 23%; color: #6c757d; font-style: italic;"
brea.style="margin-top: -5%; margin-left:28%; color: #6c757d; font-style: italic;"
barra.style="padding: 5%; font-style: italic; margin-left: -5%"
butão.style="width: 15%; margin-left: 5%; background-color: #212529; color:#f1faee; margin-top: -3%; border: 1px #335c67 inset; font-style: italic; margin-left: -0%"
body.style="background-color:#403d39"

class Livro {
 constructor( nome, criador, dataDeLancamento, genero){
     this.nome = nome
     this.dataDeLancamento = dataDeLancamento
     this.genero = genero
     this.criador = criador
 }
 tempoDeLancamento(AnoAtual){
     return AnoAtual - this.dataDeLancamento
 }
 Avaliar(nota){
     return this.nota
 }
 descricao(descrever){
     if(descrever.length > 100 ){
         console.log("A descrição deve ter até 100 caracteres")
     } else {
     this.descrever = descrever
     }
 }
 nomeDoCriador(nomeAutor){
     return  this.criador
 }
}

const oEstudoEmVermelho = new Livro("O Estudo em Vermelho", "Arthur Conan Doyle", 1887, "assasinato")
const oSignoDosQuatro = new Livro('O Signo Dos Quatro', 'Arthur Conan Doyle', 1890, 'Drama')
const aLigaDosCabecasVermelhas = new Livro('A liga dos cabeças vermelhas', 'Arthur Conan Doyle', 1892, 'Drama')
const oCaoDosBaskervilles = new Livro("O cão dos Baskervilles", "Arthur Conan Doyle", 1894, "Romance")
const oRouboDaCoroaDeBerilos = new Livro('O roubo da coroa de Berilos', 'Arthur Conan Doyle', 1902, 'Enigma')

const meusLivros = [oEstudoEmVermelho,oSignoDosQuatro,aLigaDosCabecasVermelhas,oCaoDosBaskervilles,oRouboDaCoroaDeBerilos]

const lista = document.getElementById("main")

function adicionarItem(item){

 main.innerHTML = main.innerHTML 
+ `<div style="border: 2px white solid; padding: 10px; background-color:gray; color:aliceblue; border-radius: 25px; margin-top:2%; font-style: italic; ">`
+ `<p>Nome do Livro: ${item.nome}</p>`
+ `<P> Ano de lançamento: ${item.nomeDoCriador()}`
+ `<p>Autor: ${item.dataDeLancamento}</p>`
+ `<p>Gênero: ${item.genero}</p>`
+ `</div>`

}

for (let Livro of meusLivros){
adicionarItem(Livro)
}
    
const inputNome = document.getElementById("input-nome")
const inputAno = document.getElementById("input-ano")
const autor = document.getElementById("input-autor")
const tipo = document.getElementById("input-genero")

const enviar = document.getElementById("input-enviar")

enviar.onclick = function(event){
 const novoLivro = new Livro(inputNome.value, inputAno.value, autor.value, tipo.value,)

 adicionarItem(novoLivro)

 inputNome.value = ""
 inputAno.value = 0
 autor.value = ""
 tipo.value = ""

 event.preventDefault( )
}