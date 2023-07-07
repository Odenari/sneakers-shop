import styles from './UI.module.scss'
const { greenButton } = styles

const GreenButton = () => {
	return (
		<button className={greenButton}>
			Оформить заказ
			<img src='/img/arrow.svg' alt='Arrow' />
		</button>
	)
}
export default GreenButton
