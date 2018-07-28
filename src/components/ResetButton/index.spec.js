import React from 'react'
import { shallow } from 'enzyme'

import ResetButton from '.'

describe('components:ResetButton', () => {
  it('renders the ResetButton component with proper styles', () => {
    expect(toJson(shallow(<ResetButton />).dive())).toMatchSnapshot()
  })
})
