import React from 'react'
import { render } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  const { container } = render(<App />)
  expect(container.querySelector('.App-logo')).toBeInTheDocument()
  expect(container.querySelectorAll('.App-link')).toHaveLength(2)
})
