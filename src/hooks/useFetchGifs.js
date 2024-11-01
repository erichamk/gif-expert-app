//  custom hook: devuelve variables de estado

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		const gifs = await getGifs(category);
		setImages(gifs);
		setIsLoading(false);
	};

	// useEffect es un hook para ejecutar código solo cuando los valores de cierto [] cambian,
	// ademas de la primera vez que se crea el componente.
	// Se usa en este caso para no ejecutar getGifs cada vez que algo cambia en este component
	useEffect(() => {
		getImages();
		// getGifs(category).then(gifs => setImages(gifs))
	}, []);

	return {
		images,
		isLoading,
	};
};
