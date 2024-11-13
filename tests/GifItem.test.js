import { GifItem } from '../src/components';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas en <GifItem />', () => {
	const id = 'id';
	const title = 'cat GIF';
	const url = 'https://www.url.com/';

	test('debe hacer match con el snapshot', () => {
		const { container } = render(
			<GifItem id={id} title={title} url={url} />
		);

		expect(container).toMatchSnapshot();
	});

	test('debe mostrar la imagen con el url y alt indicado', () => {
		render(<GifItem id={id} title={title} url={url} />);
		//screen.debug()
		// expect(screen.getByRole('img').alt).toBe(url);
		// expect(screen.getByRole('img').alt).toBe(title);
		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('debe mostrar lel titulo en el componente', () => {
		render(<GifItem id={id} title={title} url={url} />);
		//screen.debug()
        // getByText() solo busca en texto visible, no properties 
		expect(screen.getByText(title)).toBeTruthy;
	});
});
