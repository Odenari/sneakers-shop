//styles
import styles from './Card.module.scss';

import PlusButton from '../UI/PlusButton';
import ToWishListHeart from '../UI/ToWishListHeart';

//Packet for skeleton elements
import ContentLoader from 'react-content-loader';
const Card = ({
	onPlus,
	onFav,
	onRemove,
	isFavorite,
	isLoading = true,
	...product
}) => {
	const { data } = product;

	return (
		<div className={styles.card}>
			{isLoading ? (
				<div className='ml-15'>
					<ContentLoader
						speed={2}
						width={145}
						height={180}
						viewBox='0 0 150 187'
						backgroundColor='#e3e3e3'
						foregroundColor='#ecebeb'
					>
						<rect x='133' y='301' rx='0' ry='0' width='0' height='1' />
						<rect x='1' y='0' rx='10' ry='10' width='150' height='90' />
						<rect x='0' y='160' rx='8' ry='8' width='80' height='24' />
						<rect x='0' y='100' rx='3' ry='3' width='150' height='15' />
						<rect x='55' y='146' rx='0' ry='0' width='0' height='1' />
						<rect x='0' y='125' rx='3' ry='3' width='90' height='15' />
						<rect x='118' y='152' rx='8' ry='8' width='32' height='32' />
					</ContentLoader>
				</div>
			) : (
				<>
					<ToWishListHeart
						isFavorite={isFavorite}
						addToFavList={() => {
							isFavorite
								? onRemove({ ...data, isAdded: false })
								: onFav({ ...data });
						}}
					/>
					<img
						className={styles.sneakersImg}
						src={data.path}
						alt='sneakers example'
					/>
					<p className={styles.descr}>Мужские Кроссовки {data.title}</p>
					<div className='d-flex justify-between align-center'>
						<div className='d-flex flex-column'>
							<span className={styles.price}>Цена: </span>
							<b>{data.price} руб.</b>
						</div>
						<PlusButton flag={data.isAdded} onPlus={onPlus} />
					</div>
				</>
			)}
		</div>
	);
};

export default Card;
