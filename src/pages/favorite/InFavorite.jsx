import uniqid from 'uniqid';
import Card from '../../components/Card/Card';

import s from './Favorite.module.scss';

export const InFavorite = ({ data, onRemove }) => {
	return (
		<div className={s.inFavorite}>
			<div className={s.favHeader}>
				<button className='ml-10 mr-25'>
					<img src='img/icons/toBack.svg' alt='Go Back button' />
				</button>
				<h2>Мои Закладки</h2>
			</div>
			<div className={s.favContainer}>
				{data.length > 0 ? (
					data.map(favProduct => {
						return (
							<Card
								data={favProduct}
								key={uniqid()}
								isFavorite={true}
								// onRemove={onRemove(favProduct)}
							/>
						);
					})
				) : (
					<h2>There is nothing to see for now 🍺</h2>
				)}
			</div>
		</div>
	);
};
