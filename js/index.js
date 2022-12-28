{/* <li class="produto">

<img src="/img/Camisa Preta Feminina.png" alt="Camisa Preta Feminina">
<span class="spanProduto">Categoria</span>
<h2 class="h2Produto">Nome do item</h2>
<p class="pProduto">Descrição</p>
<span class="span2Produto">Preço</span>
<button class="buttonProduto">Adicionar ao Carrinho</button>

</li> */}


let arrayNovo = []

/* ------------------- Função para criar lista de data ------------------ */


let tagUl = document.getElementById("listaProdutos")

function criarLista(data){



    for(let i = 0; i < data.length; i++){

         
        let tagLi       = document.createElement("li")
        let tagImg      = document.createElement("img")
        let tagSpan     = document.createElement("span")
        let tagH2       = document.createElement("h2")
        let tagP        = document.createElement("p")
        let tagSpan2    = document.createElement("span")
        let tagButton   = document.createElement("button")
        let id          = data[i].id
        tagButton.setAttribute("id", id)
        
        
        tagLi.classList.add("produto")
        tagSpan.classList.add("spanProduto")
        tagH2.classList.add("h2Produto")
        tagP.classList.add("pProduto")
        tagSpan2.classList.add("span2Produto")
        tagButton.classList.add("buttonProduto")


        tagImg.src            = data[i].img
        tagImg.alt            = data[i].nameItem
        tagSpan.innerText     = data[i].tag
        tagH2.innerText       = data[i].nameItem
        tagP.innerText        = data[i].description
        tagSpan2.innerText    = `R$ ${data[i].value}`.replace(".",",")
        tagButton.innerText   = data[i].addCart
        
        tagButton.addEventListener("click", function(){

            tagUlCarrinho.innerHTML = ""

            arrayNovo.push(data[i])
            criarCarrinho(arrayNovo)

        })


        tagUl.appendChild(tagLi)
        tagLi.appendChild(tagImg)
        tagLi.appendChild(tagSpan)
        tagLi.appendChild(tagH2)
        tagLi.appendChild(tagP)
        tagLi.appendChild(tagSpan2)
        tagLi.appendChild(tagButton)

    }

}

criarLista(data)


/* -------------------------------- Pesquisa -------------------------------- */


let inputBusca = document.querySelector(".inputPesquisa")
let btnBusca   = document.querySelector(".buttonPesquisa")


btnBusca.addEventListener("click", busca)
inputBusca.addEventListener("keyup", busca)


function busca(){

    let resultado = []
    let valor = inputBusca.value
    
    for(let i = 0; i < data.length; i++){

        let pesquisa = valor.toLowerCase()
        let valorPesquisa = data[i].nameItem.toLowerCase()
        let valorCategoria = data[i].tag.toLowerCase()
             
        if(pesquisa == valorPesquisa || pesquisa == valorCategoria){
            
            tagUl.innerHTML = ""
            resultado.push(data[i])
            criarLista(resultado)

        }else if(pesquisa == ""){

            tagUl.innerHTML = ""
            criarLista(data)

        }

    }

}
















