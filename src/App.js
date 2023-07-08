//components
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Drawer from './components/Drawer/Drawer'
import SearchForm from './components/Search/SearchForm'

//utilities
// import { data } from './services/service' // this is the axios variant of getting data
import uniqid from 'uniqid'

//hooks
import { useContext, useEffect, useState } from 'react'

const App = () => {
	let [cartFlag, setCartFlag] = useState(false)
	const [products, setProducts] = useState([])
	const [cartItems, setCartItems] = useState([])

	const itemsContext = useContext(cartItems)

	useEffect(() => {
		fetch('https://64a86cf6dca581464b85b8df.mockapi.io/sneakers/products')
			.then(response => response.json())
			.then(data => setProducts(data))
	}, [])

	const addToCart = newItem => {
		if (cartItems.includes(newItem)) return null
		setCartItems(prevItems => [...prevItems, newItem])
	}

	const removeCartItem = (cartObj, flag = true) => {
		if (!flag) {
			setCartItems(
				cartItems.filter(
					item => (item.title && item.path) !== (cartObj.title && cartObj.path)
				)
			)
		}
	}

	return (
		<div className='wrapper clear'>
			{cartFlag && (
				<Drawer
					items={cartItems}
					onClose={setCartFlag}
					onRemove={(cartObj, flag) => removeCartItem(cartObj, flag)}
				/>
			)}
			<Header setFlag={setCartFlag} />
			<main>
				<div className='content p-40 '>
					<div className='d-flex justify-between align-center mb-40'>
						<h1>Все кроссовки</h1>
						<SearchForm />
					</div>

					<div className='goods d-flex justify-center'>
						{products.map(card => (
							<Card
								onPlus={() => addToCart(card)}
								path={card.path}
								title={card.title}
								price={card.price}
								key={uniqid()}
							/>
						))}
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
