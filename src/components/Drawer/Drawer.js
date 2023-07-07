import DrawerStyles from './Drawer.module.scss'
import CloseButton from '../UI/CloseButton'
import GreenButton from '../UI/GreenButton'
import CartItem from './CartItem/CartItem'

const { overlay, drawer, items, cartTotal, dashed } = DrawerStyles
const Drawer = () => {
	return (
		<div
			className={overlay}
			style={{
				// display: 'block',
				visibility: 'hidden',
			}}
		>
			<div className={drawer}>
				<div className='wd-flex justify-between'>
					<h2 className='mb-30'>Корзина</h2>
					<CloseButton />
				</div>
				<div className={items}>
					<CartItem />
					<CartItem />
				</div>
				<div className={cartTotal}>
					<ul>
						<li className='d-flex justify-between'>
							<span>Итого:</span>
							<div className={dashed}></div>
							<b>20 455 руб.</b>
						</li>
						<li className='d-flex justify-between'>
							<span>Налог 5%:</span>
							<div className={dashed}></div>
							<b>1022 руб.</b>
						</li>
					</ul>
				</div>
				<GreenButton />
			</div>
		</div>
	)
}

export default Drawer
