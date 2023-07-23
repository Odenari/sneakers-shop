import styles from './UI.module.scss';
const { favorite, unliked } = styles;
const ToWishListHeart = ({ isFavorite, addToFavList }) => {
	return (
		<div
			onClick={() => {
				if (isFavorite) {
					return addToFavList(false);
				}
				addToFavList();
			}}
			className={favorite}
		>
			<img
				width={32}
				height={32}
				className={unliked}
				src={
					isFavorite
						? 'img/icons/favoriteHeart.svg'
						: 'img/icons/notInFavorite.svg'
				}
				alt='To favorite button'
			/>
		</div>
	);
};

export default ToWishListHeart;
