import { useState } from 'react';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['SFW']);

	const onAddCategory = (value) => {
		if (categories.includes(value)) {
			return;
		}
		// categories.push() evitar, no va a funcionar y no hay que mutar estados
		setCategories([value, ...categories]);
		// si no se tiene referencia al array original:
		// setCategories(cats => [...cats, "AAA"])
	};

	return (
		<>
			{/* titulo */}
			<h1>GifExpertApp</h1>

			{/* Input */}
			<AddCategory
				setCategories={setCategories}
				onNewCategory={(value) => onAddCategory(value)}
			/>

			{/* listado de gif */}
			{/* <button onClick={onAddCategory}>Agregar</button> */}
			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
