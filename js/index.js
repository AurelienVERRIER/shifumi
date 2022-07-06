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



// const onButtonClick = () => {

  // const versus = document.getElementById("versus")
  // versus.innerHTML = `<img src="img/egalite.jpg"/>`
  // console.log(versus)
  
  // const titre = document.getElementById('titre')
  // titre.innerHTML = `<h1>Shi-Fu-Mi!!!</h1>`
  
  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }
  // const random = getRandomInt(3)
  // const countComputer = 0

  // if (random === 0) {
    
  //   const aleatoire = document.getElementById('aleatoire')
  //   aleatoire.innerHTML = `<p>Pierre!</p>`
  //   const versus = document.getElementById('versus')
  // // ou const versus = document.getElementsByClassName("versus")[0]
  //   versus.innerHTML = `<img src="img/egalite.jpg"/>`
  //   const fight = document.getElementById('fight')
  //   fight.innerHTML = `<p>Egalité!</p>`

    // const euh = " E "
    // const countPlayer = document.getElementById('countPlayer')
    // countPlayer.innerHTML =`${countPlayer}+${euh}`
    // return countPlayer
  // }

  // if (random === 1) {
  //   const aleatoire = document.getElementById('aleatoire')
  //   aleatoire.innerHTML = `<p>Feuille!</p>`
  //   const versus = document.getElementById('versus')
  //   versus.innerHTML = `<img src="img/defaite.jpg"/>`
  //   const fight = document.getElementById('fight')
  //   fight.innerHTML = `<p>Perdu!</p>`

    // const countRound = countRound + 1
    // return countRound
    // const totalRound = document.getElementById('totalRound')
    // totalRound.innerHTML = `<p>666</p>`
    // return totalRound

    // const countPlayer = document.getElementById('countPlayer')
    // countPlayer.innerHTML = `document.getElementById('countPlayer')+` D ``
  }

  // if (random === 2) {
  //   const aleatoire = document.getElementById('aleatoire')
  //   aleatoire.innerHTML = `<p>Ciseaux!</p>`
  //   const versus = document.getElementById('versus')
  //   versus.innerHTML = `<img src="img/victoire.jpg"/>`
  //   const fight = document.getElementById('fight')
  //   fight.innerHTML = `<p>Bravo!</p>`
    // const countPlayer = document.getElementById('countPlayer')
    // countPlayer.innerHTML = `document.getElementById('countPlayer')+` V ``
  }
}




// const onMouseOver = () => {
//   const choix = document.getElementById('choix')
//   choix.innerHTML = `<p>Clique sur ton choix</p>`
// }


let round = 0
let playerScore = 0
let aiScore = 0
let playerSign
let aiSign
const signs = ["pierre", "feuille", "ciseaux"]
const animationTime = 1500

const rockButton = document.getElementById("pierre")
const paperButton = document.getElementById("feuille")
const scissorsButton = document.getElementById("ciseaux")
const player = document.getElementById("player")
const ai = document.getElementById("ai")
const playerScoreDOM = document.getElementById("countPlayer")
const aiScoreDOM = document.getElementById("countComputer")
const gameHistory = document.getElementById("totalRound")
const empty = document.getElementById("empty")

// pas trouvé l'équivalent du score
const score = document.getElementById("score")

const gameButtons = document.getElementsByClassName("game-buttons")
const game = document.getElementById("game")

rockButton.addEventListener("click", () => {
  handleClick("pierre")
})
paperButton.addEventListener("click", () => {
  handleClick("feuille")
})
scissorsButton.addEventListener("click", () => {
  handleClick("ciseaux")
})

const handleClick = sign => {
  animate()

  setTimeout(() => {
    doRound(sign)
  }, animationTime - 100)
}

const doRound = sign => {
  playerSign = sign
  aiSign = chooseAiSign()
  
  displayImages()
  round = round + 1
  
  if (playerSign === "pierre") {
    if (aiSign === "ciseaux") {
      handlePlayerWin()
    } else if (aiSign === "feuille") {
      handleAiWin()
    } else {
      handleDraw()
    }
  } else if (playerSign === 'feuille') {
    if (aiSign === "ciseaux") {
      handleAiWin()
    } else if (aiSign === "pierre") {
      handlePlayerWin()
    } else {
      handleDraw()
    }
  } else if (playerSign === 'ciseaux') {
    if (aiSign === "pierre") {
      handleAiWin()
    } else if (aiSign === "feuille") {
      handlePlayerWin()
    } else {
      handleDraw()
    }
  }

  updateScore()
}

const chooseAiSign = () => {
  const index = Math.floor(Math.random() * 3)
  const sign = signs[index]
  return sign
}

const handlePlayerWin = () => {
  playerScore = playerScore + 1
  createHistoryRound("Gandalf l'emporte", "player")
}

const handleAiWin = () => {
  aiScore = aiScore + 1
  createHistoryRound("Le robot l'emporte", "ai")
}

const handleDraw = () => {
  createHistoryRound("Match vraiment nul!")
}

const createHistoryRound = (message) => {
  if (empty) {
    empty.remove()
  }

  gameHistory.innerHTML = gameHistory.innerHTML + `
    <div class="round">
      <h4>Round ${round}</h4>
      <div class="round-history">
        <div class="gandalf round-dude">
          <div class="avatar small"></div>
          <img class="sign-history" src="./images/${playerSign}-player.png" />
        </div>
        <div class="trump round-dude">
          <img class="sign-history" src="./images/${aiSign}-ai.png" />
          <div class="avatar small"></div>
        </div>
      </div>
      <h5>${message}</h5>
    <div>
  `
}

const updateScore = () => {
  playerScoreDOM.innerHTML = playerScore
  aiScoreDOM.innerHTML = aiScore

  // scroller l'historique en bas a chaque fois que l'on rajoute
  // un round
  gameHistory.scrollTop = 100000

  if (playerScore === 3) {
    game.innerHTML = `
      <h1>Shifumi</h1>
      <div class="ring">
        <div class="side gandalf">
          <div class="player">
            <div class="avatar"></div>
            <h4>Gandalf le man</h4>
          </div>
        </div>
      </div>
      <h2>Bien joué, vous avez gagné!</h2>
      <button class="game-buttons" onclick="location.reload()">Retry ?</button>
    `
  }

  if (aiScore === 3) {
    game.innerHTML = `
      <h1>Shifumi</h1>
      <div class="ring">
        <div class="side trump">
          <div class="player">
            <h4>Un robot idiot</h4>
            <div class="avatar"></div>
          </div>
        </div>
      </div>
      <h2>Le robot idiot a gagné...</h2>
      <button class="game-buttons" onclick="location.reload()">Retry ?</button>
    `
  }
}

const displayImages = () => {
  player.setAttribute("src", `./images/${playerSign}-player.png`)
  ai.setAttribute("src", `./images/${aiSign}-ai.png`)
}

const animate = () => {
  player.classList.add("sign-image-animated")
  ai.classList.add("sign-image-animated")
  disableButtons()

  setTimeout(() => {
    player.classList.remove("sign-image-animated")
    ai.classList.remove("sign-image-animated")
    enableButtons()
  }, animationTime)
}

const disableButtons = () => {
  const gamesButtonsArray = Array.from(gameButtons)

  gamesButtonsArray.forEach(button => {
    button.setAttribute("disabled", true)
  })
}

const enableButtons = () => {
  const gamesButtonsArray = Array.from(gameButtons)

  gamesButtonsArray.forEach(button => {
    button.removeAttribute("disabled")
  })
}



