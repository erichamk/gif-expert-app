import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
	const inputValue = 'cats';

	test('debe cargar gifs desde input', async () => {
		render(<GifExpertApp />);
		screen.debug();
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		expect(input.value).toBe(inputValue);

		fireEvent.submit(form);
        await waitFor(() =>
			expect(screen.getAllByRole('img').length).toBeGreaterThan(0)
		);
        expect(screen.getAllByRole('img').length).toBe(10)
	});
});
