let listReference = document.getElementById('elementsList')
let inputReference = document.getElementById('newElement')
let buttonReference = document.querySelector('#addElement')

let elements = [] // <-- una lista di elementi, aggiunti uno per uno con l'input
// ogni elemento dentro elements sarà un oggetto di tipo Element
// let elements: Element[] // <-- imparerete che i : indicano il tipo di dato

class ListElement {
  constructor(name) {
    this.name = name
  }
}
// Element sarà una classe (uno stampino) che genera delle istanze (delle stampe)
// tutte simili, ovvero degli oggetti con una sola proprietà di nome "name"
// {name: 'carote'}, {name: 'pane'}, etc.

// buttonReference.addEventListener('click', function() {})
// altra dicitura

// elements è un array

const renderList = function () {
  // puliamo la lista ogni volta che la ricreiamo
  listReference.innerHTML = ''
  // ciclare l'array elements e creare un <li> per ognuno di essi
  elements.forEach((el) => {
    // el è un oggetto tipo così: {name: 'Pane'}
    let newLi = document.createElement('li') // <li> /* innerText */ </li>
    newLi.innerText = el.name // el.name --> 'Pane'
    // <li>Pane</li>
    // <li>Carote</li>
    // appendiamo il nuovo <li> all'<ul>
    listReference.appendChild(newLi)
  })
}

buttonReference.onclick = function () {
  console.log('CLICKED!')
  // steps:
  // 1) creare una nuova istanza di ListElement a partire dal valore dell'input field
  let elemento = new ListElement(inputReference.value)
  console.log(elemento)
  // 2) aggiungere l'istanza di ListElement alla fine dell'array elements
  elements.push(elemento)
  console.log('array elements: ', elements)
  // 3) popolare la lista di elementi nel DOM
  renderList()
  // 4) resettiamo l'input field
  inputReference.value = ''
  // 5) riassegniamo il focus all'input field
  inputReference.focus()
}
