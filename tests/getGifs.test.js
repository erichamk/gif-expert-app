import { getGifs } from "../src/helpers/getGifs"

describe('Pruebas sobre getGifs', () => { 
    test('Debe retornar un arreglo de gifs', async () => { 
        const gifs = await getGifs('sfw')
        expect(gifs.length).toBe(10)
        expect(gifs[0]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),

            }
        )
     })
 })