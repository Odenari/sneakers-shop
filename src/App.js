//components
import Header from './components/Header/Header';
import Home from './pages/Home.jsx';
import Drawer from './components/Drawer/Drawer';

//utilities
import uniqid from 'uniqid';
import axios from 'axios';
import { postData, postToFavorites } from './services/service';
import { useEffect, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { InFavorite } from './pages/favorite/InFavorite';

export const App = () => {
	let [cartFlag, setCartFlag] = useState(false);
	let [toFavorites, setToFavorites] = useState(false);

	const [cartItems, setCartItems] = useState([]);
	const [products, setProducts] = useState([]);
	const [favProducts, setFavProducts] = useState([]);

	useEffect(() => {
		const dataRequest = fetch(
			'https://64a86cf6dca581464b85b8df.mockapi.io/sneakers/products'
		)
			.then(response => response.json())
			.then(data => {
				return data;
			});

		const cartRequest = axios
			.get('https://64a86cf6dca581464b85b8df.mockapi.io/sneakers/cart')
			.then(res => {
				setCartItems(res.data);
				return res.data;
			});

		axios.get('http://localhost:5005/listOfFavorites').then(res => {
			setFavProducts(res.data);
			return res.data;
		});

		Promise.all([dataRequest, cartRequest]).then(([products, cartItems]) => {
			setProducts(
				products.map(product => ({
					...product,
					isAdded:
						cartItems.findIndex(cartItem => {
							return cartItem.id === product.id;
						}) >= 0,
				}))
			);
		});
	}, []);

	const addToCart = cartItem => {
		const { isAdded, ...cleanItem } = cartItem;
		postData({ item: cleanItem }).then(res => {
			setCartItems(prevItems => [...prevItems, res.data]);
		});
	};

	const addToFav = product => {
		if (favProducts.includes(product)) return null;
		products.forEach(item => {
			if (item.id === product.id) {
				postToFavorites(product);
			} else {
				return null;
			}
		});
	};

	const removeFromFavorites = favProduct => {
		axios
			.delete(`http://localhost:5005/listOfFavorites/${favProduct.id}`)
			.then(() => {
				setFavProducts(
					favProducts.filter(item => {
						return item.id !== favProduct.id;
					})
				);
			});
	};

	const removeCartItem = id => {
		axios
			.delete(`https://64a86cf6dca581464b85b8df.mockapi.io/sneakers/cart/${id}`)
			.then(() =>
				setCartItems(
					cartItems.filter(data => {
						return data.id !== id;
					})
				)
			)
			.catch(e => {
				new Error(e);
			});
	};

	const [searchValue, setSearchValue] = useState('');

	const filteredProducts = useMemo(() => {
		if (!searchValue) {
			return products;
		} else {
			return products.filter(card => card.title.includes(searchValue));
		}
	}, [products, searchValue]);

	return (
		<div className='wrapper clear'>
			{cartFlag && (
				<Drawer
					inCart={cartItems}
					onClose={setCartFlag}
					onRemove={id => removeCartItem(id)}
				/>
			)}
			<Header setFlag={setCartFlag} setToFavorites={setToFavorites} />
			<main className='mb-100'>
				<Routes>
					<Route
						path='/'
						element={
							<Home
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								filteredProducts={filteredProducts}
								addToCart={addToCart}
								addToFav={addToFav}
								removeFromFavorites={removeFromFavorites}
								favProducts={favProducts}
							/>
						}
					/>
				</Routes>
			</main>
		</div>
	);
};

export default App;
