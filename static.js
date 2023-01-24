// METODI e PROPRIETÀ STATICI nelle classi
// un metodo o una proprietà statici all'interno di una classe sono dei metodi
// e delle proprietà NON accessibili dalle ISTANZE della classe, ma solamente
// all'interno della classe stessa.

// anteponendo la keyword "static" rendiamo un metodo o una proprietà statici

class Article {
  constructor(title, author) {
    this.title = title
    this.author = author
  }

  static isSameAuthor(articleA, articleB) {
    return articleA.author === articleB.author
  }
}

let myArticle = new Article("L'importanza delle mantidi religiose", 'John Doe')
// myArticle è un'ISTANZA di Article

let articles = [
  new Article('HTML today', 'Jill Valentine'), // <-- articles[0]
  new Article('Modern CSS', 'Chris Redfield'), // <-- articles[1]
  new Article('Future JS', 'Albert Wesker'), // <-- articles[2]
]

// per trovare isSameAuthor devo cercarlo all'interno della classe! NON nelle istanze
console.log(Article.isSameAuthor(articles[0], articles[2]))
