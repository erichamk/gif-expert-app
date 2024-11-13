import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../src/components';

describe('Pruebas en <AddCategory />', () => {
	const inputValue = 'value';
	test('Debe cambiar el valor en la caja de texto', async () => {
		render(<AddCategory onNewCategory={() => {}} />);

		const input = screen.getByRole('textbox');

		fireEvent.input(input, { target: { value: inputValue } });

		expect(input.value).toBe(inputValue);
		// screen.debug()
	});

	test('Debe llamar onNewCategory si input tiene un valor', async () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		expect(input.value).toBe(inputValue);

		fireEvent.submit(form);
		expect(input.value).toBe('');
		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
		// screen.debug()
	});

	test('No llamar onNewCategory si input está vacío', async () => {

		const inputValueVacio = ''
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValueVacio } });
		expect(input.value).toBe(inputValueVacio);

		fireEvent.submit(form);
		expect(input.value).toBe('');
		expect(onNewCategory).not.toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(0);
		// screen.debug()
	});
});
