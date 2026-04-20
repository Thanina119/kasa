import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Banner from '../src/components/Banner'
import bannerImg from "../src/assets/banner-img.png"

describe('Banner', () => {
    test('affiche le texte passé en props', () => {
        render(<Banner text="Chez vous, partout et ailleurs" />)
        expect(screen.getByText('Chez vous, partout et ailleurs')).toBeInTheDocument()
    })

    test("affiche l'image passée en props", () => {
        render(<Banner image={bannerImg} />)


        const image = screen.getByRole('img')


        expect(image).toHaveAttribute('src', bannerImg)
    })
})