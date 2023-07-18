import { useState } from 'react'
import styles from './UI.module.scss'

const { plusBtn } = styles
const icons = {
	plus: 'img/icons/plusBtn.svg',
	added: 'img/icons/checked.svg',
}
const PlusButton = ({ onPlus, flag }) => {
	let [iconFlag, setIconFlag] = useState(flag)
	return (
		<>
			<button className={plusBtn}>
				<img
					onClick={() => {
						onPlus()
						setIconFlag(prev => !prev)
					}}
					src={iconFlag ? icons.added : icons.plus}
					alt='button icon'
				/>
			</button>
		</>
	)
}

export default PlusButton
