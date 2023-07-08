import { useState } from 'react'
import styles from './UI.module.scss'

const { plusBtn } = styles
const icons = {
	plusIcon: 'img/icons/plusBtn.svg',
	addedIcon: 'img/icons/checked.svg',
}

const PlusButton = ({ onPlus }) => {
	let altField = 'no icon'
	let [isAdded, setIsAdded] = useState(false)

	return (
		<>
			<img
				src={isAdded ? icons.addedIcon : icons.plusIcon}
				alt={altField}
				className={plusBtn}
				onClick={() => {
					console.log('before: ' + isAdded)
					onPlus()
					setIsAdded(prevFlagValue => {
						console.log(
							'Flag must be changed from : ' +
								prevFlagValue +
								' to: ' +
								!prevFlagValue
						)
						return !!prevFlagValue
					})
					console.log('after: ' + isAdded)
				}}
			/>
		</>
	)
}

export default PlusButton
