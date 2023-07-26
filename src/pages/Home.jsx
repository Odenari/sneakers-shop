import Card from '../components/Card/Card';
import SearchForm from '../components/Search/SearchForm';
import uniqid from 'uniqid';

export default function Home({
	searchValue,
	setSearchValue,
	filteredProducts,
	addToCart,
	addToFav,
	removeFromFavorites,
	favProducts,
	isLoading,
}) {
	const renderItems = () => {
		return (isLoading ? [...Array(10)] : filteredProducts).map(fProduct => (
			<Card
				data={fProduct}
				onPlus={() => addToCart(fProduct)}
				onFav={product => addToFav(product)}
				onRemove={product => removeFromFavorites(product)}
				key={uniqid()}
				isLoading={isLoading}
				isFavorite={favProducts.findIndex(fav => fav.id === fProduct.id) >= 0}
			/>
		));
	};
	return (
		<div className='p-30'>
			<div className='d-flex justify-between align-center mt-20 mb-20 pl-40 pr-40'>
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

			<div className='goods d-flex justify-center'>{renderItems()}</div>
		</div>
	);
}
