import { screen } from '@testing-library/dom';
import { GifGrid } from '../src/components';
import { render } from '@testing-library/react';
import { useFetchGifs } from '../src/hooks/useFetchGifs';

//esto hace que se reemplace el useFetchGifs original dentro de GifGrid
jest.mock('../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
	const category = 'cat';
	test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

		render(<GifGrid category={category} />);
        // screen.debug()
		expect(screen.getByText('Cargando...'));
		expect(screen.getByText(category));
	});

    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/a.jpg'
            },
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/a.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        
        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2)
        
     })
});
