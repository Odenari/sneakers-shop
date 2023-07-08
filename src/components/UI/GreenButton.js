import styles from './UI.module.scss'
const { greenButton } = styles

const GreenButton = () => {
	return (
		<button className={greenButton}>
			Оформить заказ
			<img src='/img/icons/arrow.svg' alt='Arrow' />
		</button>
	)
}
export default GreenButton
