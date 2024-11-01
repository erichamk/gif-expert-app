export const getGifs = async (category) => {
	const api_key = 'n36LRCCaUUdU27WHafQbswbkZrdCcbO1';
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`;
	const resp = await fetch(url);
	// const resp = new Request(url)
	// console.log(resp);
    const gifs = []
	if (resp.status === 200) {
		const { data } = await resp.json();

		gifs.push(...data.map((img) => ({
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
		    }))
        );
	}
    console.log(gifs);
	return gifs;
};
