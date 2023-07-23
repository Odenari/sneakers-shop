//components
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Drawer from './components/Drawer/Drawer';
import SearchForm from './components/Search/SearchForm';
import { InFavorite } from './pages/favorite/InFavorite';
//utilities
import uniqid from 'uniqid';
import axios from 'axios';

//hooks
import { postData, postToFavorites } from './services/service';
import { useEffect, useMemo, useState } from 'react';

const App = () => {
	let [cartFlag, setCartFlag] = useState(false);

	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);
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
						{filteredProducts.map(fProduct => (
							<Card
								data={fProduct}
								onPlus={() => addToCart(fProduct)}
								onFav={favProduct => addToFav(favProduct)}
								onRemove={product => removeFromFavorites(product)}
								key={uniqid()}
								isFavorite={
									favProducts.findIndex(fav => fav.id === fProduct.id) >= 0
								}
							/>
						))}
					</div>
					<div>
						<InFavorite
							data={favProducts}
							onRemove={product => removeFromFavorites(product)}
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
