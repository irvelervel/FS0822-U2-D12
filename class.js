// abbiamo visto che JS è un linguaggio di programmazione orientato agli oggetti
// la differenza principale, tuttavia, con altri linguaggi di programmazione più classici
// come Java, C#, C++ è che JS si basa sul concetto di PROTOTIPO, mentre gli altri si
// basano sul concetto di CLASSE

// grazie alle classi, gli altri linguaggi permettono di estendere le funzionalità
// di una struttura principale creando delle "sottovarianti", delle "sottoclassi"

let obj = {}
// in JS è possibile creare un oggetto direttamente con le {} senza avere il costruttore,
// mentre in tutti i classici linguaggi OOP questo non è possibile: è necessario avere
// PRIMA la classe, e poi se ne deriva l'istanza (l'oggetto)

// negli altri linguaggi non è possibile modificare uno "stampino" dopo la sua creazione
// mentre in JS come abbiamo visto ieri è possibile agire sui prototipi

// con il passare del tempo e l'introduzione di ES6 anche JS ha cominciato a permettere
// a suoi sviluppatori di utilizzare il concetto di "classe", uniformando gli approcci
// con altri linguaggi più blasonati e rendendo più facile la transizione a sviluppatori
// provenienti da questi linguaggi.

class Person {
  // qua definisco la classe
  constructor(name, surname) {
    this.name = name
    this.surname = surname
    this.email = ''
  }
}

let marioRossi = new Person('Mario', 'Rossi')
marioRossi.email = 'mariorossi@gmail.com'

let luigiVerdi = new Person('Luigi', 'Verdi')

console.log(marioRossi)
console.log(luigiVerdi)

class House {
  constructor(squaredMeters, numberOfRooms) {
    this.squaredMeters = squaredMeters
    this.numberOfRooms = numberOfRooms
  }

  // nelle classi le proprietà e i metodi si dichiarano senza inizializzazione
  // quindi senza const, let, function etc.
  // creiamo un metodo generateReport()
  generateReport() {
    return (
      'Ciao! Sono una casa grande ' +
      this.squaredMeters +
      ' metri quadrati e ho ' +
      this.numberOfRooms +
      ' camere.'
    )
  }
}

let bigHouse = new House(130, 6)
console.log(bigHouse.generateReport())

// console.log(House.generateReport()) // <-- questo NON funziona!!
// generateReport non esiste nella CLASSE, esiste solamente nelle ISTANZE della classe

let monolocale = new House(40, 2)
console.log(monolocale.generateReport())

// SOTTOCLASSI ED EREDITARIETÀ
// grazie a questa struttura a classi scopriamo quanto è facile ESTENDERE una classe
// per crearne una sottovariante

class Developer extends Person {
  constructor(name, surname, knownLanguages) {
    // super invoca il costruttore della classe da cui estendete
    super(name, surname)
    // Person in questo caso è definita la SUPERCLASSE di developer
    this.knownLanguages = knownLanguages
  }
}

// un Developer avrà senz'altro anche name, surname, email (perchè esistono in Person)

let marioDev = new Developer('Mario', 'Rossi', [
  { name: 'HTML', rating: 8 },
  { name: 'CSS', rating: 7 },
])
console.log(marioDev.showOff())

class SeniorDeveloper extends Developer {
  constructor(name, surname, knownLanguages, favouriteLang) {
    super(name, surname, knownLanguages)
    this.favouriteLang = favouriteLang
  }

  showOff() {
    return "I'm an experienced developer!"
  }
}

let marioSeniorDev = new SeniorDeveloper(
  'Mario',
  'Rossi',
  [
    { name: 'HTML', rating: 8 },
    { name: 'CSS', rating: 7 },
  ],
  'TypeScript'
)

console.log(marioSeniorDev.showOff())
