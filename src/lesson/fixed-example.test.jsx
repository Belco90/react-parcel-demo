import React from 'react'
import { render } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  const utils = render(<App />)
  expect(utils.getByText('Hello Parcel + React!')).toBeInTheDocument()
})
