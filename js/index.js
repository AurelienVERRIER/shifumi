// const playerScore = 0
// const computerScore = 0

// if playerScore = 5{
//   end boucle
//   console.log("Vous avez gagné, félicitations!")
// }

// else if computerScore = 5{
//   end boucle
//   console.log("Dommage, vous avez perdu, recommencez une partie!")
// }

// else if clickOnButton 
//   random computerBet (from 1 to 3)

//     if p && 1
//     ou f && 2
//     ou c && 3


// Sinon, lance la boucle:

// le joueur clique sur un bouton (p, f ou c)
// -> lance un random de 3 pour l'ordinateur

// si p et 1
// ou f et 2
// ou c et 3
// -> égalité

// si p et 2
// si f et 3
// si c et 1
// -> ordinateur gagne
// -> ajoute 1 au score de l'ordinateur

// si p et 3
// si f et 1
// si c et 2
// -> le joueur gagne
// -> ajoute 1 au score du joueur




// const element = document.getElementById("titre")
// console.log(element)

// console.log(document)

// const elements = document.getElementsByClassName("challengers")
// console.log(elements)

// const paragraphs = document.getElementsByTagName("img")
// console.log(paragraphs)

// const titre = document.querySelector("#titre")
// console.log(titre)

// const section = document.querySelector("section")
// console.log(section)

// const shifumiPlayer = document.querySelector(".player")
// console.log(shifumiPlayer)


// Ici, la méthode createElement nous permet de créer un <p></p>
// Il n'est pas encore inséré dans notre DOM
// const newParagraph = document.createElement("p");
// console.log(newParagraph)
// // createTextNode nous permet de créer le texte qu'on va insèrer
// // dans notre newParagraph
// const text = document.createTextNode("Bienvenue sur ce petit jeu classique");
// console.log(text)
// // appendChild nous permet d'insérer text dans newParagraph
// newParagraph.appendChild(text);
// console.log(
// // on récupere la div dans laquelle on veut insérer newParagraph
// const textAdded = textAdded.getElementById("content");
// console.log(textAdded)
// // on insère newParagrapj dans element
// const newText= textAdded.appendChild(newParagraph);
// console.log(newText)



// const onButtonClick = () => {
//   const titre = document.getElementById('titre')
//   titre.innerHTML = `<h1>Shi-Fu-Mi!!!</h1>`
// }

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const onButtonClick = () => {
  
  const titre = document.getElementById('titre')
  titre.innerHTML = `<h1>Shi-Fu-Mi!!!</h1>`
  
  const random = getRandomInt(3)
  const aleatoire = document.getElementById('aleatoire')
  aleatoire.innerHTML = `<p>${random}</p>`
}




const onMouseOver = () => {
  console.log("Clique pour changer le titre")
}