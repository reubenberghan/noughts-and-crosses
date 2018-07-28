import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'

import checkForWinEpic from '.'
import { gameOver, squareClicked } from '../../actions'
import { getMoves } from '../../selectors'
import { getBoard, getWins } from '../../../utilities'

jest.mock('../../actions', () => ({
  gameOver: jest.fn().mockReturnValue({ type: 'GAME_OVER' }),
  squareClicked: jest.fn().mockReturnValue({ type: 'SQUARE_CLICKED' })
}))

jest.mock('../../selectors', () => ({
  getMoves: jest
    .fn()
    .mockReturnValueOnce([]) // no moves
    .mockReturnValueOnce([4, 6, 0, 7]) // < 5 moves
    .mockReturnValueOnce([4, 6, 0, 7, 1]) // 4 < moves < 9
    .mockReturnValueOnce([4, 6, 0, 7, 8]) // 4 < moves < 9
    .mockReturnValueOnce([0, 1, 2, 4, 3, 5, 7, 6, 8]) // full board
    .mockReturnValue([0, 1, 2, 5, 8, 7, 6, 3, 4]) // full board
}))

jest.mock('../../../utilities', () => ({
  getBoard: jest
    .fn()
    .mockReturnValueOnce([
      'x',
      'x',
      undefined,
      undefined,
      'x',
      undefined,
      'o',
      'o',
      undefined
    ]) // five plays, no win
    .mockReturnValueOnce([
      'x',
      undefined,
      undefined,
      undefined,
      'x',
      undefined,
      'o',
      'o',
      'x'
    ]) // five plays, win
    .mockReturnValueOnce(['x', 'o', 'x', 'x', 'o', 'o', 'o', 'x', 'x']) // tie game
    .mockReturnValue(['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']), // double win
  getWins: jest
    .fn()
    .mockReturnValueOnce() // check but no win
    .mockReturnValueOnce([[0, 4, 8]]) // check and win
    .mockReturnValueOnce([]) // check and tie
    .mockReturnValue([[0, 4, 8], [2, 4, 6]]) // check and win
}))

describe('epics', () => {
  describe('checkForWin', () => {
    it('checks for and responds to wins correctly', () => {
      const epicMiddleWare = createEpicMiddleware()
      const store = configureMockStore([epicMiddleWare])({})
      const action = squareClicked()

      epicMiddleWare.run(checkForWinEpic)

      store.dispatch(action)
      store.dispatch(action)
      store.dispatch(action)
      store.dispatch(action)
      store.dispatch(action)
      store.dispatch(action)

      expect(gameOver.mock.calls).toEqual([
        [[0, 4, 8, 2, 6], 'x'],
        [[0, 4, 8], 'x'],
        [[]],
        [[0, 4, 8, 2, 6], 'x']
      ])
      expect(store.getActions()).toEqual([
        action,
        action,
        action,
        gameOver(),
        action,
        gameOver(),
        action,
        gameOver(),
        action,
        gameOver()
      ])
    })
  })
})
