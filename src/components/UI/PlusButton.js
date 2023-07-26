import { useState } from 'react';
import styles from './UI.module.scss';

const { plusBtn } = styles;

const PlusButton = ({ onPlus }) => {
	let [iconFlag, setIconFlag] = useState(false);
	return (
		<>
			<button className={plusBtn}>
				<img
					onClick={() => {
						onPlus();
						setIconFlag(prev => !prev);
					}}
					src={iconFlag ? '/img/icons/checked.svg' : '/img/icons/plusBtn.svg'}
					alt='button icon'
				/>
			</button>
		</>
	);
};

export default PlusButton;
