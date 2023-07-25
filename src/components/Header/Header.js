import { Link } from 'react-router-dom';
import HeaderStyles from './Header.module.scss';
const { header, headerPrice, headerInfo } = HeaderStyles;

const Header = ({ setFlag, setToFavorites }) => {
	const handleCartClick = () => {
		setFlag(true);
	};

	const handleHeartClick = () => {
		setToFavorites(true);
	};

	return (
		<header className={`${header} d-flex justify-between align-center p-40`}>
			<Link to='/'>
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
			</Link>
			<ul className='d-flex'>
				<li onClick={handleCartClick} className='mr-25'>
					<img className='mr-10' src='/img/icons/cart.svg' alt='Корзина' />
					<span onClick={handleCartClick} className={headerPrice}>
						1205 руб.
					</span>
				</li>
				<li onClick={handleHeartClick} className='mr-25'>
					<Link to='/favorites'>
						<img src='img/icons/toFavHeart.svg' alt='Закладки' />
					</Link>
				</li>
				<li className='mr-25'>
					<img src='img/icons/user.svg' alt='Профиль пользователя' />
				</li>
			</ul>
		</header>
	);
};
export default Header;
