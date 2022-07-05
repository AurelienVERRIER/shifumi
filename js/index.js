const element = document.getElementById("titre")
console.log(element)

console.log(document)

const elements = document.getElementsByClassName("challengers")
console.log(elements)

const paragraphs = document.getElementsByTagName("img")
console.log(paragraphs)

const titre = document.querySelector("#titre")
console.log(titre)

const section = document.querySelector("section")
console.log(section)

const shifumiPlayer = document.querySelector(".player")
console.log(shifumiPlayer)

const newParagraph = document.createElement("p");

// Ici, la méthode createElement nous permet de créer un <p></p>
// Il n'est pas encore inséré dans notre DOM
const newParagraph = document.createElement("p");

// createTextNode nous permet de créer le texte qu'on va insèrer
// dans notre newParagraph
const text = document.createTextNode("Bienvenue sur ce petit jeu classique");

// appendChild nous permet d'insérer text dans newParagraph
newParagraph.appendChild(text);

// on récupere la div dans laquelle on veut insérer newParagraph
const contenu = document.getElementById("content");

// on insère newParagrapj dans element
contenu.appendChild(newParagraph);