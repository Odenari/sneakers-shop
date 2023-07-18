//components
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Drawer from './components/Drawer/Drawer'
import SearchForm from './components/Search/SearchForm'

//utilities
import uniqid from 'uniqid'
import axios from 'axios'

//hooks
import { postData } from './services/service'
import { useEffect, useMemo, useState } from 'react'

const App = () => {
	let [cartFlag, setCartFlag] = useState(false)

	const [products, setProducts] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		const dataRequest = fetch(
			'https://64a86cf6dca581464b85b8df.mockapi.io/sneakers/products'
		)
			.then(response => response.json())
			.then(data => {
				return data
			})

		const cartRequest = axios
			.get('https://64a86cf6dca581464b85b8df.mockapi.io/sneakers/cart')
			.then(res => {
				setCartItems(res.data)
				return res.data
			})

		Promise.all([dataRequest, cartRequest]).then(
			([productsData, cartItemsData]) => {
				setProducts(
					productsData.map(product => ({
						...product,
						isAdded:
							cartItemsData.findIndex(cartItem => {
								return cartItem.id === product.id
							}) >= 0,
					}))
				)
			}
		)
	}, [])

	const addToCart = cartItem => {
		const { isAdded, ...cleanItem } = cartItem
		postData({ item: cleanItem }).then(res => {
			setCartItems(prevItems => [...prevItems, res.data])
		})
	}

	const removeCartItem = id => {
		axios
			.delete(`https://64a86cf6dca581464b85b8df.mockapi.io/sneakers/cart/${id}`)
			.then(() =>
				setCartItems(
					cartItems.filter(data => {
						return data.id !== id
					})
				)
			)
			.catch(e => {
				new Error(e)
			})
	}

	const filteredProducts = useMemo(() => {
		if (!searchValue) {
			return products
		} else {
			return products.filter(card => card.title.includes(searchValue))
		}
	}, [products, searchValue])

	return (
		<div className='wrapper clear'>
			{cartFlag && (
				<Drawer
					inCart={cartItems}
					onClose={setCartFlag}
					onRemove={id => removeCartItem(id)}
				/>
			)}
			<Header setFlag={setCartFlag} />
			<main>
				<div className='search-block content p-40 '>
					<div className='d-flex justify-between align-center mb-40'>
						{searchValue ? (
							<h2>Поиск по запросу: {searchValue}</h2>
						) : (
							<h1>Все кроссовки</h1>
						)}
						<SearchForm
							flag={searchValue}
							productName={searchValue}
							clearValue={() => setSearchValue('')}
							updateSearchValue={e => setSearchValue(e.target.value)}
						/>
					</div>

					<div className='goods d-flex justify-center'>
						{filteredProducts.map(card => (
							<Card data={card} onPlus={() => addToCart(card)} key={uniqid()} />
						))}
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
