import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import ResetButton from '.'
import { RESET_GAME } from '../../state'

const mockStore = configureStore()

describe('containers:ResetButton', () => {
  it('maps state and dispatch to props', () => {
    const store = mockStore({ moves: [0, 1, 2] })
    const wrapper = shallow(<ResetButton store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({ handleClick: expect.any(Function) })
    )
  })

  it(`maps handlClick to dispatch ${RESET_GAME} action`, () => {
    const store = mockStore({ moves: [] })

    store.dispatch = jest.fn()

    const wrapper = shallow(<ResetButton store={store} />)

    wrapper
      .dive()
      .props()
      .onClick()

    expect(store.dispatch).toHaveBeenCalledWith({ type: RESET_GAME })
  })
})
