import React from 'react'
import { render } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  const wrapper = render(<App />)
  expect(wrapper.getByText('Hello Parcel + React!')).toBeInTheDocument()
})
