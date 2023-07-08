import axios from 'axios'

async function getData() {
	const response = await axios.get(
		'https://64a86cf6dca581464b85b8df.mockapi.io/sneakers/products'
	)
	return response.data
}
export const data = await getData()
