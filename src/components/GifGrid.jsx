import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

	const {images, isLoading} = useFetchGifs(category)

	// const [images, setImages] = useState([]);

	// const getImages = async() => {
	// 	const gifs = await getGifs(category);
	// 	setImages(gifs);
	// };

	// useEffect es un hook para ejecutar código solo cuando los valores de cierto [] cambian,
	// ademas de la primera vez que se crea el componente.
	// Se usa en este caso para no ejecutar getGifs cada vez que algo cambia en este component
	// useEffect(() => {
	// 	getImages();
	// 	// getGifs(category).then(gifs => setImages(gifs))
	// }, []);

	

	return (
		<>
			<h3>{category}</h3>
			{
				isLoading && (<h2>Cargando...</h2>)
			}
			<div className='card-grid'>
				{/* atender que => () retorna lo que está en el () pero => {} solo ejecuta */}
				{images.map((image) => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
