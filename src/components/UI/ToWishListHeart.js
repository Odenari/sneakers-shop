import styles from './UI.module.scss'
const { favorite, unliked } = styles
const ToWishListHeart = () => {
	return (
		<div className={favorite}>
			<img className={unliked} src='img/icons/heart.svg' alt='unliked' />
		</div>
	)
}

export default ToWishListHeart
