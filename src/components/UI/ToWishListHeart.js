import styles from './UI.module.scss'
const { favorite, unliked } = styles
const ToWishListHeart = () => {
	return (
		<div className={favorite}>
			<img className={unliked} src='img/heart.svg' alt='unliked' />
		</div>
	)
}

export default ToWishListHeart
