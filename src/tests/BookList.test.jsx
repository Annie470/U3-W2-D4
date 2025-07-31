import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import BookList from '../components/BookList'
import scifiBooks from '../assets/data/scifi.json'

describe('test initial mounting', () => {
  it('Verifies that all the cards from the JSON are rendered in the DOM', () => {
    render(<BookList arrayBook={scifiBooks} />)
    const cards = screen.getAllByTestId('cardBook')
    expect(cards).toHaveLength(scifiBooks.length)
  })
  it('Filters books based on search input', async () => {  
    render(<BookList arrayBook={scifiBooks} />)
    const searchInput = screen.getByPlaceholderText('Cerca..')
    fireEvent.change(searchInput, { target: { value: 'pandemic' } })
    const filteredCards = await screen.findAllByTestId('cardBook')
    expect(filteredCards.length).toBeLessThan(scifiBooks.length)
    expect(filteredCards).toHaveLength(1)
    expect(screen.getByText(/pandemic/i)).toBeInTheDocument()
  })
  it('Loads comments in DOM after clicking on a book', async () => {
    render(<BookList arrayBook={scifiBooks} />)
    //prova con find
    const arrayBook = await screen.findAllByTestId('cardBook')
    fireEvent.click(arrayBook[0])
    const recensioni = await screen.findByText(/recensioni:/i)
    expect(recensioni).toBeInTheDocument()
  })

})
