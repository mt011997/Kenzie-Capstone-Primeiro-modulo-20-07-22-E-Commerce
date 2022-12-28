/* ----------------------------- cacrrinho vazio ---------------------------- */

let buttonCarrinho = document.querySelector(".buttonProduto")
let tagUlCarrinho  = document.querySelector(".ulCarrinho2")
let tagPCarrinho   = document.createElement("p")
let tagP2Carrinho  = document.createElement("p")

tagPCarrinho.classList.add("pCarrinho")
tagP2Carrinho.classList.add("p2Carrinho")

tagPCarrinho.innerText  = "Carrinho vazio"
tagP2Carrinho.innerText = "Adicione itens"

tagUlCarrinho.appendChild(tagPCarrinho)
tagUlCarrinho.appendChild(tagP2Carrinho)


/* ---------------------- adicionando itens no carrinho --------------------- */


function criarCarrinho(){

    if(arrayNovo.length == 0){

        tagUlCarrinho.appendChild(tagPCarrinho)
        tagUlCarrinho.appendChild(tagP2Carrinho)

    }

    for(let i = 0; i < arrayNovo.length; i++){

        let tagLiCarrinho       = document.createElement("li")
        let tagImgCarrinho      = document.createElement("img")
        let tagDivCarrinho      = document.createElement("div")
        let tagH2Carrinho       = document.createElement("h2")
        let tagspanCarrinho     = document.createElement("span")
        let tagButtonCarrinho   = document.createElement("button")
        let idCarrinho          = i
        tagButtonCarrinho.setAttribute("id", idCarrinho)


        tagLiCarrinho.classList.add("produtoCarrinho")
        tagImgCarrinho.classList.add("imgCarrinho")
        tagDivCarrinho.classList.add("carrinhoInfo")
        tagH2Carrinho.classList.add("h2Carrinho")
        tagspanCarrinho.classList.add("span2Carrinho")
        tagButtonCarrinho.classList.add("buttonCarrinho")


        tagImgCarrinho.src          = arrayNovo[i].img
        tagImgCarrinho.alt          = arrayNovo[i].nameItem
        tagH2Carrinho.innerText     = arrayNovo[i].nameItem
        tagspanCarrinho.innerText   = `R$ ${arrayNovo[i].value}`.replace(".",",")
        tagButtonCarrinho.innerText = "Remover item"


        tagUlCarrinho.appendChild(tagLiCarrinho)
        tagLiCarrinho.appendChild(tagImgCarrinho)
        tagLiCarrinho.appendChild(tagDivCarrinho)
        tagDivCarrinho.appendChild(tagH2Carrinho)
        tagDivCarrinho.appendChild(tagspanCarrinho)
        tagDivCarrinho.appendChild(tagButtonCarrinho)


        /* --------------------------- Quantidade de itens e valor total-------------------------- */
        
        quanditdadeItens()

        /* ------------------------------ remover item ------------------------------ */


        tagButtonCarrinho.addEventListener("click", function(event){

            let btnRemover = event.target       

            if(btnRemover.tagName == "BUTTON"){
                
                let index = btnRemover.id

                arrayNovo.splice(index, 1)

                tagUlCarrinho.innerHTML = ""
                
                criarCarrinho() 
                soma()
                quanditdadeItens()
                
            }
            
        })
        
    }

}


 /* ------------------------------- Valor Total ------------------------------ */


function soma(){

    let total = 0

        for(let j = 0; j < arrayNovo.length; j++){
    
            total += arrayNovo[j].value
    
        }
    
        let tagSpanTotal       = document.querySelector(".spanTotal")
        tagSpanTotal.innerText = `R$ ${total.toFixed(2)}`.replace(".",",")
        
}

/* --------------------------- Quantidade de itens -------------------------- */

function quanditdadeItens(){

    let tagSpanQuantidade = document.querySelector(".spanQuantidade") 

    tagSpanQuantidade.innerText = arrayNovo.length
    
    if(tagSpanQuantidade == 0){

        tagUlCarrinho.appendChild(tagPCarrinho)
        tagUlCarrinho.appendChild(tagP2Carrinho)

    }
    
    soma()


}














































