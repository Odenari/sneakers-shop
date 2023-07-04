const App = () => {
	return (
		<div className='wrapper clear'>
			<header className='d-flex justify-between align-center p-40'>
				<div className='d-flex align-center'>
					<img
						className='mr-20'
						width={40}
						height={40}
						src='/img/logo.png'
						alt='Shop logo'
					/>
					<div className='headerInfo'>
						<h3 className='text-uppercase title'>React Sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className='d-flex'>
					<li className='mr-25'>
						<img className='mr-10' src='/img/cart.svg' alt='cart icon' />
						<span className='header-price'>1205 руб.</span>
					</li>
					<li className='mr-25'>
						<img src='img/heart.svg' alt='heart icon' />
					</li>
					<li className='mr-25'>
						<img src='img/user.svg' alt='user icon' />
					</li>
				</ul>
			</header>
			<main>
				<div className='content p-40'>
					<h1>Все кроссовки</h1>

					<div className='d-flex'>
						<div className='card'>
							<img
								width={133}
								height={112}
								src='img/sneakers/1.jpg'
								alt='sneaker example'
							/>
							<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className='d-flex justify-between align-center'>
								<div className='d-flex flex-column'>
									<span>Цена: </span>
									<b>12 999 руб.</b>
								</div>
								<button className='btn-plus'>
									<img
										width={11}
										height={11}
										src='img/plus.svg'
										alt='plus icon'
									/>
								</button>
							</div>
						</div>

						<div className='card'>
							<img
								width={133}
								height={112}
								src='img/sneakers/1.jpg'
								alt='sneaker example'
							/>
							<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className='d-flex justify-between align-center'>
								<div className='d-flex flex-column'>
									<span>Цена: </span>
									<b>12 999 руб.</b>
								</div>
								<button className='btn-plus'>
									<img
										width={11}
										height={11}
										src='img/plus.svg'
										alt='plus icon'
									/>
								</button>
							</div>
						</div>

						<div className='card'>
							<img
								width={133}
								height={112}
								src='img/sneakers/1.jpg'
								alt='sneaker example'
							/>
							<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className='d-flex justify-between align-center'>
								<div className='d-flex flex-column'>
									<span>Цена: </span>
									<b>12 999 руб.</b>
								</div>
								<button className='btn-plus'>
									<img
										width={11}
										height={11}
										src='img/plus.svg'
										alt='plus icon'
									/>
								</button>
							</div>
						</div>

						<div className='card'>
							<img
								width={133}
								height={112}
								src='img/sneakers/1.jpg'
								alt='sneaker example'
							/>
							<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className='d-flex justify-between align-center'>
								<div className='d-flex flex-column'>
									<span>Цена: </span>
									<b>12 999 руб.</b>
								</div>
								<button className='btn-plus'>
									<img
										width={11}
										height={11}
										src='img/plus.svg'
										alt='plus icon'
									/>
								</button>
							</div>
						</div>

						<div className='card'>
							<img
								width={133}
								height={112}
								src='img/sneakers/1.jpg'
								alt='sneaker example'
							/>
							<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className='d-flex justify-between align-center'>
								<div className='d-flex flex-column'>
									<span>Цена: </span>
									<b>12 999 руб.</b>
								</div>
								<button className='btn-plus'>
									<img
										width={11}
										height={11}
										src='img/plus.svg'
										alt='plus icon'
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
