import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Drawer from './components/Drawer/Drawer'

//utilities
import uniqid from 'uniqid'
import SearchForm from './components/Search/SearchForm'

const arr = [
	{
		path: '/img/sneakers/1.jpg',
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12999,
		key: uniqid(),
	},
	{
		path: '/img/sneakers/2.png',
		name: 'Мужские Кроссовки Nike Air Max 270',
		price: 14600,
		key: uniqid(),
	},
]

const App = () => {
	return (
		<div className='wrapper clear'>
			<Drawer />
			<Header />
			<main>
				<div className='content p-40 '>
					<div className='d-flex justify-between align-center mb-40'>
						<h1>Все кроссовки</h1>
						<SearchForm />
					</div>

					<div className='goods d-flex'>
						{arr.map(card => (
							<Card
								key={card.key}
								path={card.path}
								name={card.name}
								price={card.price}
								click={() => console.log(card)}
							/>
						))}
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
