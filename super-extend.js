class Computer {
  constructor(brand) {
    this.brand = brand
  }

  showBrand() {
    return 'Ho un computer ' + this.brand
  }
}

let macbook = new Computer('Apple')
console.log(macbook.showBrand())

let surface = new Computer('Microsoft')
console.log(surface.showBrand())

// questa classe è utilizzabile da sola!

class ComputerModel extends Computer {
  // estendiamo da Computer, quindi ogni ComputerModel avrà brand e showBrand()
  constructor(brand, model) {
    super(brand)
    // invoco il costruttore di Computer in modo da automaticamente assegnare "brand"
    // al parametro con cui ho creato il mio ComputerModel
    this.model = model
    // model è una proprietà che avranno SOLAMENTE i ComputerModel
  }

  showComplete() {
    // voglio che showComplete mostri sia brand sia model
    return this.showBrand() + ', il modello è ' + this.model
  }
}

let macbookAir = new ComputerModel('Apple', 'Macbook Air')
console.log(macbookAir.showBrand())
console.log(macbookAir.showComplete())

// console.log(macbook.showComplete()) // <-- showComplete() non esiste su Computer :(
