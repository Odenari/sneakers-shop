import CartItemStyles from './CartItem.module.scss'
import CloseButton from '../../UI/CloseButton'

const { cartItem, cartItemImg } = CartItemStyles
const CartItem = ({ title, price, path, remove }) => {
	return (
		<div className={cartItem}>
			<div
				className={cartItemImg}
				style={{
					backgroundImage: `url(${path})`,
				}}
			></div>

			<div className='mr-10'>
				<p>Мужские Кроссовки</p>
				<span>{title}</span>
				<b>{price} руб.</b>
			</div>
			<CloseButton remover={() => remove()} />
		</div>
	)
}

export default CartItem
