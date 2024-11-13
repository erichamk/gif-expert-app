import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

	// custom hook
	const {images, isLoading} = useFetchGifs(category)

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

GifGrid.propTypes = {
	category: PropTypes.string.isRequired
}