import { useState } from 'react';

export const AddCategory = ({ setCategories, onNewCategory}) => {
	const [inputValue, setInputValue] = useState('One Punch');

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		// para que no haga refresh de la pagina
		event.preventDefault();
		console.log(inputValue);
		if (inputValue.trim().length <= 1) return;
		// Metodo 1: llamar al hook directamente (no recomendado)
		// como no se tiene referencia al array original:
		// setCategories((categories) => [inputValue, ...categories]);
		// Método 2: emitir un evento al componente padre para que llame al hook
		onNewCategory(inputValue.trim());
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='Buscar gifs'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};
