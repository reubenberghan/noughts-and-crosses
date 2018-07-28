import { connect } from 'react-redux'

import ResetButton from '../../components/ResetButton'
import { resetGame } from '../../state'

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(resetGame())
  }
}

export default connect(undefined, mapDispatchToProps)(ResetButton)
