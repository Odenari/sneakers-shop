import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Drawer from './components/Drawer/Drawer'
const App = () => {
	return (
		<div className='wrapper clear'>
			<Drawer />
			<Header />
			<main>
				<div className='content p-40 '>
					<div className='d-flex justify-between align-center mb-40'>
						<h1>Все кроссовки</h1>
						<div className='search-wrapper d-flex align-center'>
							<img
								className='search-icon'
								src='img/search.svg'
								alt='search icon'
							/>
							<input maxLength={50} type='text' placeholder='Поиск...' />
						</div>
					</div>

					<div className='goods d-flex'>
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
