import styles from './UI.module.scss'
const { plusBtn } = styles
const PlusButton = () => {
	return (
		<button className={plusBtn}>
			<img width={11} height={11} src='img/plus.svg' alt='plus icon' />
		</button>
	)
}

export default PlusButton
