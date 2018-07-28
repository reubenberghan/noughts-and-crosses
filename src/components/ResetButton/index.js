import React from 'react'
import styled from 'styled-components'

const StyledResetButton = styled.button`
  cursor: pointer;
  height: 5vh;
  justify-self: center;
  width: 20vh;
`

StyledResetButton.displayName = 'StyledResetButton'

export default function ResetButton ({ handleClick }) {
  return <StyledResetButton onClick={handleClick}>Reset Game</StyledResetButton>
}
