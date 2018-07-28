import { gameOver, resetGame, squareClicked } from '.'
import { GAME_OVER, RESET_GAME, SQUARE_CLICKED } from '..'

describe('state:actions', () => {
  describe('gameOver', () => {
    it('produces the correct action when the game is over', () => {
      const squares = [0, 4, 8, 2, 6]
      const player = 'x'

      expect(gameOver(squares, player)).toMatchObject({
        type: GAME_OVER,
        payload: {
          winners: {
            squares,
            player
          }
        }
      })
    })
  })

  describe('squareClicked', () => {
    it('produces the correct action for clicking a Square', () => {
      const square = 4

      expect(squareClicked(square)).toMatchObject({
        type: SQUARE_CLICKED,
        payload: {
          square: 4
        }
      })
    })
  })

  describe('resetGame', () => {
    it('produces the correct action for clicking the reset game button', () => {
      expect(resetGame()).toMatchObject({ type: RESET_GAME })
    })
  })
})
