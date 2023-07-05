import CloseButton from '../../UI/CloseButton'

const CartItem = () => {
	return (
		<div className='cart-item'>
			<div
				className='cart-item-img'
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
