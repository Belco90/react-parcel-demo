/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { fireEvent } from '@testing-library/dom'
import { render, screen } from '@testing-library/react'

import { App } from '../App'

it('should show extra text on mouse hover', () => {
  render(<App />)
  expect(screen.queryByText('Mouse hover!')).not.toBeInTheDocument()

  const resetInput = screen.getByLabelText(/reset all the counts/)
  fireEvent.mouseEnter(resetInput)
  expect(screen.getByText('Mouse hover!')).toBeInTheDocument()

  fireEvent.mouseLeave(resetInput)
  expect(screen.queryByText('Mouse hover!')).not.toBeInTheDocument()
})
