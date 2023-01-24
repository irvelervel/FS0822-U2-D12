// DESIGN PATTERNS
// i design patterns sono degli schermi mentali, delle strategie di risoluzione di problemi
// testate e verificate che possono venirvi utili nella fase di progettazione software.
// sono strategie riutilizzabili, comprovate, dei modi di pensare.
// sono indipendenti dal linguaggio utilizzato, modelli di riferimento per risolvere
// problemi.

// PATTERN CREAZIONALI -> singleton
// un singleton si ottiene limitando la creazione di istanze a partire di una classe a
// una soltanto. Il singleton inoltre provvederà ad impedire una nuova istanziazione
// della classe prescelta, fornendo invece semplicemente un riferimento all'istanza
// già creata. Il singleton spesso serve per racchiudere una serie di funzionalità
// in un'istanza, in un pacchetto, che poi viene condivisa con l'intero applicativo.

// PATTERN COMPORTAMENTALE -> Observer
// questo pattern prevede la creazione di un oggetto "principale" chiamato Subject,
// che verrà "osservato" da un'altra serie di oggetti chiamati "Observer".
// Quando una modifica avviene nel Subject, quest'ultimo si occupa di notificare
// tutti gli Observer di cos'è accaduto. Inoltre il Subject può rimuovere uno o più
// Observers in autonomia.

// PATTERN STRUTTURALE -> MODULE PATTERN
// questa strategia prevede la separazione del codice in diversi "moduli", in diverse
// porzioni, che genererà una struttura modulare di codice accessibile dall'esterno
// tramite un meccanismo di import/export.
// Perchè scrivere il docide in moduli? per realizzare un'architettura più facilmente
// decifrabile, gestibile e più facilmente debuggabile (più robusta).
// esattamente come i partials di sass _
