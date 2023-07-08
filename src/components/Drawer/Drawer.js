import DrawerStyles from './Drawer.module.scss'

import CartItem from './CartItem/CartItem'
import CloseButton from '../UI/CloseButton'
import GreenButton from '../UI/GreenButton'

import uniqid from 'uniqid'

// import itemsContext from '../../App'
const { overlay, drawer, itemsStyle, cartTotal, dashed } = DrawerStyles

const Drawer = ({ onClose, items = [], onRemove }) => {
	return (
		<div className={overlay}>
			<div className={drawer}>
				<div className='d-flex justify-between'>
					<h2 className='mb-30'>Корзина</h2>
					<CloseButton remover={onClose} />
				</div>
				<div className={itemsStyle}>
					{items.map(item => (
						<CartItem
							title={item.title}
							path={item.path}
							price={item.price}
							key={uniqid()}
							remove={(cartObj, flag) => onRemove(cartObj, flag)}
						/>
					))}
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
