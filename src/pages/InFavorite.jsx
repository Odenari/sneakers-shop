import uniqid from 'uniqid';
import Card from '../components/Card/Card';
import { Link } from 'react-router-dom';

export default function InFavorite({ data, removeFromFavorites, addToCart }) {
	return (
		<>
			<div
				className='pl-40 pr-40'
				style={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<div className='d-flex  mt-20 mb-20 ml-10'>
					<Link to='/'>
						{/* <button className=' mr-25'>
							<img src='img/icons/toBack.svg' alt='Go Back button' />
						</button> */}
					</Link>
					<h2>Мои Закладки</h2>
				</div>
				<div className='d-flex mb-20 goods'>
					{data.length > 0 ? (
						data.map(favProduct => {
							return (
								<Card
									data={favProduct}
									key={uniqid()}
									isFavorite={true}
									onPlus={() => addToCart(favProduct)}
									onRemove={product => removeFromFavorites(product)}
								/>
							);
						})
					) : (
						<h2>There is nothing to see for now 🍺</h2>
					)}
				</div>
			</div>
		</>
	);
}
