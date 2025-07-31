import { render, screen} from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Welcome from '../components/Welcome'

describe('test initial mounting', ()=> {
    it('Checks if the component is rendered in the DOM', ()=> {
        render(<Welcome/>)
         const title = screen.getByText(/catzilla/i)
         expect(title).toBeInTheDocument()
    })
})