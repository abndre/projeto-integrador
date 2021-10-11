
//Ítens de coleta
//Pegar todos os Li's 
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)     
}


const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // Adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id  

    console.log('ITEM ID: ', itemId)

    //Verficar se existem itens selecionados, se sim
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( function(item) {
        const itemFound = item == itemId   //Será true ou false
        return itemFound
    } )

    //Se já estiver selecionado,
    if( alreadySelected >= 0) {
            //tirar da seleção
        const filteredItems = selectedItems.filter( function(item) {
            const itemIsDifferent = item != itemId  //False
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        // Se não estiver selecionado, adicionar à seleção
        selectedItems.push(itemId)
    }

    console.log('selectedItems: ', selectedItems)

        
    // Atualizar o campo escondido com os itens selecionados

    collectedItems.value = selectedItems
}

