import { GAME_OVER, RESET_GAME, SQUARE_CLICKED } from '..'

function gameOver (squares, player) {
  return {
    type: GAME_OVER,
    payload: {
      winners: {
        squares,
        player
      }
    }
  }
}

function resetGame () {
  return { type: RESET_GAME }
}

function squareClicked (square) {
  return {
    type: SQUARE_CLICKED,
    payload: {
      square
    }
  }
}

export { gameOver, resetGame, squareClicked }
