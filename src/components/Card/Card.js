//styles
import styles from './Card.module.scss';

import PlusButton from '../UI/PlusButton';
import ToWishListHeart from '../UI/ToWishListHeart';
const Card = ({
	data: { title, path, price, isAdded, id },
	onPlus,
	onFav,
	onRemove,
	isFavorite,
}) => {
	return (
		<div className={styles.card}>
			<ToWishListHeart
				isFavorite={isFavorite}
				addToFavList={() => {
					isFavorite
						? onRemove({ title, path, price, id, isAdded: false })
						: onFav({ title, path, price, id, isAdded });
				}}
			/>
			<img className={styles.sneakersImg} src={path} alt='sneakers example' />
			<p className={styles.descr}>Мужские Кроссовки {title}</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span className={styles.price}>Цена: </span>
					<b>{price} руб.</b>
				</div>
				<PlusButton flag={isAdded} onPlus={onPlus} />
			</div>
		</div>
	);
};

export default Card;
