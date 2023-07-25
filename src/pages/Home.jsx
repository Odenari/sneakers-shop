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
}) {
	return (
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
		</div>
	);
}
