import PlusButton from '../UI/PlusButton'
import ToWishListHeart from '../UI/ToWishListHeart'

function Card() {
	return (
		<div className='card'>
			<ToWishListHeart />
			<img
				width={135}
				height={112}
				src='img/sneakers/1.jpg'
				alt='sneaker example'
			/>
			<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена: </span>
					<b>12 999 руб.</b>
				</div>
				<PlusButton />
			</div>
		</div>
	)
}

export default Card
