//styles
import styles from './Card.module.scss'

import PlusButton from '../UI/PlusButton'
import ToWishListHeart from '../UI/ToWishListHeart'
import { useState } from 'react'

function Card({ data: { title, path, price, isAdded }, onPlus }) {
	const [isFavorite, setIsFavorite] = useState(false)
	return (
		<div className={styles.card}>
			<ToWishListHeart isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
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
	)
}

export default Card
