/*--------- Constant ------------ */
const timerEl = document.querySelector(".timer")
const scoreEl = document.querySelector(".score")
const gameAreaEl = document.querySelector(".gameArea")
const ballEl = document.querySelector(".ball")
const startBtnEl = document.querySelector(".startGame")
const difficultySelectEL = document.querySelector("#difficulty")
const restartEl = document.querySelector(".reset")
const ChooseDiffEl = document.querySelector(".ChooseDiff")

/*--------- Variables ------------ */
let score = 0
let gameTime = 20
let gameInterval
/*--------- Functions ------------ */

const startGame = () => {
  score = 0
  gameTime = 20

  startBtnEl.style.display = "none"

  difficultySelectEL.style.display = "none"

  gameInterval = setInterval(() => {
    gameTime--
    timerEl.textContent = `Time: ${gameTime}s`
    if (gameTime === 0) {
      endGame()
    }
  }, 1000)

  scoreCollect()

  ballMoveSpeed()

  console.log("hi")
}

const endGame = () => {
  clearInterval(gameInterval)

  timerEl.textContent = `Time is Up!!!`

  ballEl.style.display = "none"

  if (score >= 1) {
    alert(`Time is up!! Your score is: ${score}`)
    scoreEl.textContent = `Your score is ${score}`
  } else {
    alert(`You lose try again`)
    scoreEl.textContent = `You lose Try Again (:`
  }
}

const scoreCollect = () => {
  ballEl.addEventListener("click", () => {
    score++
    scoreEl.textContent = `Score: ${score}`
  })
}

const ballMove = () => {
  const gameAreaWidth = gameAreaEl.clientWidth
  const gameAreaHeight = gameAreaEl.clientHeight

  const randomX = Math.floor(
    Math.random() * (gameAreaWidth - ballEl.clientWidth)
  )
  const randomY = Math.floor(
    Math.random() * (gameAreaHeight - ballEl.clientHeight)
  )

  ballEl.style.left = `${randomX}px`
  ballEl.style.top = `${randomY}px`
}

const ballMoveSpeed = () => {
  if (difficultySelectEL.value == "easy") {
    setInterval(ballMove, 800)
    ChooseDiffEl.textContent = `Game mode: Easy`
  } else if (difficultySelectEL.value == "medium") {
    setInterval(ballMove, 500)
    ChooseDiffEl.textContent = `Game mode: Medium`
  } else if (difficultySelectEL.value == "hard") {
    setInterval(ballMove, 300)
    ChooseDiffEl.textContent = `Game mode: Hard`
  }
}

const restartPage = () => {
  location.reload()
}

/*--------- Event Listeners ------------ */
startBtnEl.addEventListener("click", startGame)
restartEl.addEventListener("click", restartPage)
