import React from 'react'
import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import { App } from '../App'

it('should render a basic demo', () => {
  render(<App />)
  expect(screen.getByText('Hello Parcel + React!')).toBeInTheDocument()
})
