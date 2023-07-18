import styles from './UI.module.scss'
const { greenButton } = styles

const GreenButton = ({ children, classMod, remover }) => {
	return (
		<button
			onClick={() => {
				if (remover) {
					remover()
				}
			}}
			className={classMod || greenButton}
		>
			{children}
			<img src='/img/icons/arrow.svg' alt='Arrow' />
		</button>
	)
}
export default GreenButton
