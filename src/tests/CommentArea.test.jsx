import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CommentArea from '../components/CommentArea'

describe('CommentArea component', () => {
  it('Verifies that Comment Area is rendered in the DOM', () => {
    render(<CommentArea bookId={"0425264041"} />)
    const areaComm = screen.getByText(/commenta:/i)
    expect(areaComm).toBeInTheDocument()
    
  })
})
