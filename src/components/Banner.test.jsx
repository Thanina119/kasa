import { render, screen, fireEvent } from '@testing-library/react'
import Banner from './Banner'


describe('Banner', () => {
    test('affiche le texte de la bannière de la page accueil', () => {
        render(<Banner text="Chez vous, partout et ailleurs" />)

        expect(screen.queryByText('Chez vous, partout et ailleurs')).not.toBeNull()
    })

})