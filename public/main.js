// +1 score team 1
const scoresEvent = () => {
  console.log("team one button")
const currentScore = document.querySelector('.score1').textContent
const newScore = parseInt(currentScore) + 1
document.querySelector('.score1').textContent = newScore
}
// -1 score team 1
const scoresMinusEvent = () => {
  console.log("team one button")
  const currentScore = document.querySelector('.score1').textContent
  if(currentScore > 0){
    const newScore = parseInt(currentScore) - 1
    document.querySelector('.score1').textContent = newScore
    }

}

// change team 1 name
const team1Name = () => {
  console.log("team one button")
const currentName = document.querySelector('.team1Name')
 
const inputName = document.querySelector('.team1nameInput') 
currentName.textContent = inputName.value

}

const btn_updateTeam1Name = document.querySelector('.updateteam1name')
btn_updateTeam1Name.addEventListener('click',team1Name)


// +1 score team 2 
const scoresEvent2 = () => {
  console.log("team two button")
const currentScore = document.querySelector('.score2').textContent
const newScore = parseInt(currentScore) + 1
document.querySelector('.score2').textContent = newScore
}

// -1 score team 2
const scoresMinusEvent2 = () => {
  console.log("team two button")
  const currentScore = document.querySelector('.score2').textContent
  if(currentScore > 0){
    const newScore = parseInt(currentScore) - 1
    document.querySelector('.score2').textContent = newScore
    }
  }

// change team 2 name
const team2Name = () => {
  console.log("team two button")
const newNameTextbox = document.querySelector('.team2Name')
const displayHeader = document.querySelector('.team2NameDisplay') 
displayHeader.textContent = newNameTextbox.value

}

const btn_updateTeam2Name = document.querySelector('.updateteam2name')
btn_updateTeam2Name.addEventListener('click',team2Name)
 
// const inputName = document.querySelector('.team1nameInput') 
// currentName.textContent = inputName.value



document.querySelector('.add1').addEventListener('click', scoresEvent)
document.querySelector('.team1Subtract1').addEventListener('click', scoresMinusEvent)
document.querySelector('.updateteam1name').addEventListener('click', team1Name)

document.querySelector('.add1').addEventListener('click', scoresEvent)
document.querySelector('.team2Subtract1').addEventListener('click', scoresMinusEvent)
document.querySelector('.updateteam2name').addEventListener('click', team2Name)
