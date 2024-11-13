import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en useFetchGifs', () => {
	test('debe regresar el estado inicial', () => {
		// los hooks solo se pueden llamar desde un functional component de react
		// por eso se usa renderHook
		const { result } = renderHook(() => useFetchGifs('cat'));
		const { images, isLoading } = result.current;

		expect(images.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test('debe regresar un arreglo de imagenes y isLoading en false', async () => {
		const { result } = renderHook(() => useFetchGifs('cat'));

		await waitFor(() =>
			expect(result.current.images.length).toBeGreaterThan(0)
		);
		const { images, isLoading } = result.current;

		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
