import DrawerStyles from './Drawer.module.scss'
import stylesUI from '../UI/UI.module.scss'

import CartItem from './CartItem/CartItem'
import CloseButton from '../UI/CloseButton'
import GreenButton from '../UI/GreenButton'

import uniqid from 'uniqid'

const { overlay, drawer, itemsStyle, cartTotal, dashed, cartEmpty } =
	DrawerStyles

const Drawer = ({ onClose, inCart = [], onRemove }) => {
	return (
		<div className={overlay}>
			<div className={drawer}>
				<div className='d-flex justify-between'>
					<h2 className='mb-30'>Корзина</h2>
					<CloseButton remover={onClose} />
				</div>
				<div className={itemsStyle}>
					{!inCart.length ? (
						<div className={cartEmpty}>
							<img
								width={120}
								height={120}
								src='/img/icons/emptyBox.png'
								alt='Empty box'
							/>
							<h2>Корзина пустая</h2>
							<p className='opacity-6'>
								Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
							</p>
							<GreenButton remover={onClose} classMod={stylesUI.greenButtonMod}>
								Вернуться назад
							</GreenButton>
						</div>
					) : (
						inCart.map(data => (
							<CartItem
								id={data.item.id}
								title={data.item.title}
								path={data.item.path}
								price={data.item.price}
								key={uniqid()}
								remove={() => {
									onRemove(data.id)
								}}
							/>
						))
					)}
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
				<GreenButton>Оформить заказ</GreenButton>
			</div>
		</div>
	)
}

export default Drawer
