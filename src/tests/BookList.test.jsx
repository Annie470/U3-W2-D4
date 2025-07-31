import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import BookList from '../components/BookList'
import scifiBooks from '../assets/data/scifi.json'

describe('test initial mounting', () => {
  it('Verifies that all the cards from the JSON are rendered in the DOM', () => {
    render(<BookList arrayBook={scifiBooks} />)
    const cards = screen.getAllByTestId('cardBook')
    expect(cards).toHaveLength(scifiBooks.length)
  })
})
