import CartItemStyles from './CartItem.module.scss'
import CloseButton from '../../UI/CloseButton'

const { cartItem, cartItemImg } = CartItemStyles

const CartItem = () => {
	return (
		<div className={cartItem}>
			<div
				className={cartItemImg}
				style={{
					backgroundImage: 'url(img/sneakers/1.jpg)',
				}}
			></div>
			<div className='mr-10'>
				<p>Мужские Кроссовки</p>
				<span>Nike Blazer Mid Suede</span>
				<b>12 999 руб.</b>
			</div>
			<CloseButton />
		</div>
	)
}

export default CartItem
