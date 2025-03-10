document.addEventListener("DOMContentLoaded", function() {
  // Titolo del contatore (fuori dal contenitore)
  const title = document.createElement("h1");
  title.textContent = "Counter";
  document.body.appendChild(title);

  // Contenitore principale per l'applicazione
  const app = document.createElement("div");
  app.id = "counter-app";

  // Elemento per visualizzare il counter
  const counterDisplay = document.createElement("span");
  counterDisplay.id = "counter-display";
  counterDisplay.textContent = "0";

  // Bottoni per incrementare e decrementare
  // Pulsante per decrementare
  const decrementButton = document.createElement("button");
  decrementButton.id = "decrement-btn";
  decrementButton.textContent = "-";

  // Pulsante per incrementare
  const incrementButton = document.createElement("button");
  incrementButton.id = "increment-btn";
  incrementButton.textContent = "+";

  // Aggiungi un gestore di eventi touchstart ai pulsanti
const buttons = document.querySelectorAll('button');

  // Aggiunge i pulsanti e la visualizzazione al contenitore
  app.appendChild(decrementButton);
  app.appendChild(counterDisplay);
  app.appendChild(incrementButton);

  // Aggiunge il contenitore al body della pagina
  document.body.appendChild(app);

  // Inizializza il valore del counter
  let counter = 0;

  // Funzione aggiornamento della visualizzazione del counter
  function updateCounter() {
      counterDisplay.textContent = counter;
  }

  // Gestori degli eventi per i pulsanti
  // Diminuzione
  decrementButton.addEventListener("click", function(event) {
    event.preventDefault();  // Previene il comportamento predefinito del click
    this.classList.add('active'); // Aggiungi la classe active
    counter--;
    updateCounter();
    removeActiveClass(this);
});

decrementButton.addEventListener("touchstart", function(event) {
    event.preventDefault();  // Previene il comportamento predefinito del touch
    this.classList.add('active'); // Aggiungi la classe active
    counter--;
    updateCounter();
    removeActiveClass(this);
});

// Aumento
incrementButton.addEventListener("click", function(event) {
  event.preventDefault();  // Previene il comportamento predefinito del click
  this.classList.add('active'); // Aggiungi la classe active
  counter++;
  updateCounter();
  removeActiveClass(this);
});

incrementButton.addEventListener("touchstart", function(event) {
  event.preventDefault();  // Previene il comportamento predefinito del touch
  this.classList.add('active'); // Aggiungi la classe active
  counter++;
  updateCounter();
  removeActiveClass(this);
});

// Funzione per rimuovere la classe 'active' dopo un breve ritardo
function removeActiveClass(button) {
  setTimeout(() => {
      button.classList.remove('active'); // Rimuovi la classe active dopo un breve ritardo
  }, 100); // Ritardo di 100 millisecondi
}});