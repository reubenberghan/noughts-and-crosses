import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'

import { Board, Square } from '..'

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`
function makeSquares () {
  return times(
    idx => <Square key={idx} index={idx} player={idx % 2 === 0 ? 'x' : 'o'} />,
    9
  )
}

StyledApp.displayName = 'StyledApp'

export default function App () {
  return (
    <StyledApp>
      <Board>{makeSquares()}</Board>
    </StyledApp>
  )
}
