import SearchFormStyles from './SearchForm.module.scss'
const { searchWrapper, searchIcon, clear } = SearchFormStyles
const SearchForm = ({ productName, updateSearchValue, clearValue }) => {
	return (
		<div className={`${searchWrapper} d-flex align-center`}>
			<img
				className={searchIcon}
				src='img/icons/search.svg'
				alt='search icon'
			/>
			<input
				value={productName}
				onChange={updateSearchValue}
				maxLength={50}
				type='text'
				placeholder='Поиск...'
			/>
			<div onClick={clearValue} className={clear}>
				<img src='img/icons/close-btn.svg' alt='Clear field buttton' />
			</div>
		</div>
	)
}

export default SearchForm
