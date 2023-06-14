class MeuError extends Error {
    constructor(message){
      super(message);
      this.name = "Meu Erro";
    }
  }


class Produto {
    constructor(nome,cadastro, descricao ,preco){
this.nome = nome;
this.cadastro = cadastro;
this.descricao = descricao;
this.preco = preco;
}


  retornarAtributos() {
    try {
      return this.atributos();
    } catch (erro) {
      console.log(erro.stack)
    }
  }
Mostrar_produtos(){
    if(this.nome != "" && this.cadastro != "" && this.descricao != "" && this.preco != ""){
        `<div>${this.cadastro}</div> 
    <div>${this.nome}</div> 
    <div>${this.descricao}</div> 
    <div>${this.preco}</div> 
`
}
    else{
  throw new MeuError("Ta errado, ta faltando")
    }
    
}
}



class ProdutoDestaque extends Produto{
constructor(nome,cadastro, descricao ,preco , imagem){
super(nome,cadastro, descricao ,preco)
this.imagem = imagem;
}
Mostrar_produtos_destaque(){
    return `
    <div>${this.cadastro}</div> 
    <div>${this.nome}</div> 
   <img class ="img" src= " ${this.imagem}"><img>
    <div>${this.descricao}</div> 
    <div>${this.preco}</div> 
    `

}

}
let produto = new Produto("Garrafa Stanley","GBravin","carrega liquidos","R$200")
console.log(produto.Mostrar_produtos())
 
let produtodestaque = new ProdutoDestaque("Garrafa "," Bravin"," carrega liquidos ", "R$:30","https://s2.glbimg.com/ZHcY8qtdiU1f837RYKPLd7PzZmE=/166x0:563x430/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/X/A/Cq4NMnT7GuABc7PRxGbw/sem-titulo-1.jpg")
console.log(produtodestaque.Mostrar_produtos_destaque())

const div = document.getElementById("destaque")
div.insertAdjacentHTML("afterbegin",produtodestaque.Mostrar_produtos_destaque() )

const div2 = document.getElementById("lista-produtos")
div2.insertAdjacentHTML("afterbegin",produto.Mostrar_produtos() )
