//styles
import styles from './Card.module.scss'

import PlusButton from '../UI/PlusButton'
import ToWishListHeart from '../UI/ToWishListHeart'

function Card({ title, path, price, onPlus, onFavorite }) {
	return (
		<div className={styles.card}>
			<ToWishListHeart onFavorite={onFavorite} />
			<img className={styles.sneakersImg} src={path} alt='sneakers example' />
			<p className={styles.descr}>Мужские Кроссовки ${title}</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span className={styles.price}>Цена: </span>
					<b>{price} руб.</b>
				</div>
				<PlusButton onPlus={onPlus} />
			</div>
		</div>
	)
}

export default Card
