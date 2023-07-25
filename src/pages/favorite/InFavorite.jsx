import uniqid from 'uniqid';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import s from './Favorite.module.scss';

export const InFavorite = ({ data, backToHome }) => {
	return (
		<>
			<div className={s.inFavorite}>
				<div className={s.favHeader}>
					<Link to='/'>
						<button onClick={() => backToHome()} className='ml-10 mr-25'>
							<img src='img/icons/toBack.svg' alt='Go Back button' />
						</button>
					</Link>
					<h2>Мои Закладки</h2>
				</div>
				<div className={s.favContainer}>
					{data.length > 0 ? (
						data.map(favProduct => {
							return (
								<Card data={favProduct} key={uniqid()} isFavorite={true} />
							);
						})
					) : (
						<h2>There is nothing to see for now 🍺</h2>
					)}
				</div>
			</div>
		</>
	);
};
