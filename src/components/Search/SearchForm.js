import SearchFormStyles from './SearchForm.module.scss'
const { searchWrapper, searchIcon } = SearchFormStyles
const SearchForm = () => {
	return (
		<div className={`${searchWrapper} d-flex align-center`}>
			<img className={searchIcon} src='img/search.svg' alt='search icon' />
			<input maxLength={50} type='text' placeholder='Поиск...' />
		</div>
	)
}

export default SearchForm
