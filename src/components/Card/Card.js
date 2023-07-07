//styles
import styles from './Card.module.scss'

import PlusButton from '../UI/PlusButton'
import ToWishListHeart from '../UI/ToWishListHeart'

function Card(props) {
	return (
		<div className={styles.card} onClick={props.click}>
			<ToWishListHeart />
			<img width={135} height={112} src={props.path} alt='sneaker example' />
			<p>{props.name}</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена: </span>
					<b>{props.price} руб.</b>
				</div>
				<PlusButton />
			</div>
		</div>
	)
}

export default Card
