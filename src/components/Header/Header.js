import HeaderStyles from './Header.module.scss'
const { header, headerPrice, headerInfo } = HeaderStyles

const Header = ({ setFlag }) => {
	const handleClick = () => {
		setFlag(true)
	}

	return (
		<header className={`${header} d-flex justify-between align-center p-40`}>
			<div className='d-flex align-center'>
				<img
					className='mr-20'
					width={40}
					height={40}
					src='/img/icons/logo.png'
					alt='Shop logo'
				/>
				<div className={headerInfo}>
					<h3 className='text-uppercase title'>React Sneakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className='d-flex'>
				<li onClick={handleClick} className='mr-25'>
					<img className='mr-10' src='/img/icons/cart.svg' alt='cart icon' />
					<span onClick={handleClick} className={headerPrice}>
						1205 руб.
					</span>
				</li>
				<li className='mr-25'>
					<img src='img/icons/favProducts.svg' alt='heart icon' />
				</li>
				<li className='mr-25'>
					<img src='img/icons/user.svg' alt='user icon' />
				</li>
			</ul>
		</header>
	)
}
export default Header
