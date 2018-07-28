import { connect } from 'react-redux'
import { contains } from 'ramda'

import Square from '../../components/Square'
import { getMoves, getWinningSquares, squareClicked } from '../../state'
import { getPlayer } from '../../utilities'

function mapStateToProps (state, { index }) {
  const moves = getMoves(state)
  const winners = getWinningSquares(state)
  const gameIsOver = !!winners
  const player = getPlayer(index, moves)

  return gameIsOver
    ? { player, isWinningSquare: contains(index, winners) }
    : { player }
}

function mapDispatchToProps (dispatch, { index }) {
  return {
    handleClick: () => dispatch(squareClicked(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)
