import { render, screen, fireEvent } from '@testing-library/react'
import Collapse from './Collapse'

describe('Collapse', () => {
    test('affiche le titre', () => {
        render(
            <Collapse title="Description">
                Mon contenu
            </Collapse>
        )

        expect(screen.getByText('Description')).not.toBeNull()
    })

    test('le contenu est caché au départ', () => {
        render(
            <Collapse title="Description">
                Mon contenu
            </Collapse>
        )

        expect(screen.queryByText('Mon contenu')).toBeNull()
    })

    test('affiche le contenu après clic', () => {
        render(
            <Collapse title="Description">
                Mon contenu
            </Collapse>
        )

        fireEvent.click(screen.getByText('Description'))

        expect(screen.getByText('Mon contenu')).not.toBeNull()
    })

    test('cache le contenu après 2 clics', () => {
        render(
            <Collapse title="Description">
                Mon contenu
            </Collapse>
        )

        const button = screen.getByText('Description')

        fireEvent.click(button)
        fireEvent.click(button)

        expect(screen.queryByText('Mon contenu')).toBeNull()
    })
})


