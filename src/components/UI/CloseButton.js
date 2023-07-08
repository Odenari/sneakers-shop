import styles from './UI.module.scss'
const { closeBtn } = styles
const CloseButton = ({ remover }) => {
	// const handleClose = () => {
	// 	onClose(false)
	// }
	return (
		<button onClick={() => remover(false)} className={closeBtn}>
			<img
				width={11}
				height={11}
				src='img/icons/close-btn.svg'
				alt='plus icon'
			/>
		</button>
	)
}

export default CloseButton
