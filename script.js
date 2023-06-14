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
let produto = new Produto("Caderno","Constelação","360 folhas","R$150")
console.log(produto.Mostrar_produtos())
 
let produtodestaque = new ProdutoDestaque("Caderno ","Constelação"," 380 folhas ", "R$:123","https://images.tcdn.com.br/img/img_prod/969839/caderno_magic_signos_435_1_42d32257bf524ea51f1b05efbd4b7222.png")
console.log(produtodestaque.Mostrar_produtos_destaque())

const div = document.getElementById("destaque")
div.insertAdjacentHTML("afterbegin",produtodestaque.Mostrar_produtos_destaque() )

const div2 = document.getElementById("lista-produtos")
div2.insertAdjacentHTML("afterbegin",produto.Mostrar_produtos() )
