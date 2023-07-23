import axios from 'axios';

export async function postData(data) {
	return axios.post(
		'https://64a86cf6dca581464b85b8df.mockapi.io/sneakers/cart',
		data
	);
}

export async function getData(
	path = 'https://64a86cf6dca581464b85b8df.mockapi.io/sneakers/products'
) {
	const response = await axios.get(path);
	return response.data;
}

export const postToFavorites = product => {
	axios.post('http://localhost:5005/listOfFavorites', product, {
		headers: { 'Content-Type': 'application/json' },
	});
};
