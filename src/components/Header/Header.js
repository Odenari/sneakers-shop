import HeaderStyles from './Header.module.scss'
const { header, headerPrice, headerInfo } = HeaderStyles

const Header = () => {
	return (
		<header className={`${header} d-flex justify-between align-center p-40`}>
			<div className='d-flex align-center'>
				<img
					className='mr-20'
					width={40}
					height={40}
					src='/img/logo.png'
					alt='Shop logo'
				/>
				<div className={headerInfo}>
					<h3 className='text-uppercase title'>React Sneakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className='d-flex'>
				<li className='mr-25'>
					<img className='mr-10' src='/img/cart.svg' alt='cart icon' />
					<span className={headerPrice}>1205 руб.</span>
				</li>
				<li className='mr-25'>
					<img src='img/heart.svg' alt='heart icon' />
				</li>
				<li className='mr-25'>
					<img src='img/user.svg' alt='user icon' />
				</li>
			</ul>
		</header>
	)
}
export default Header
