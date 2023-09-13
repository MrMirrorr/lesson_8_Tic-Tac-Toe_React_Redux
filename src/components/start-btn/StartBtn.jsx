import styles from './StartBtn.module.css';
import { clearBoard } from '../../action-creators';
import { useDispatch } from 'react-redux';

export const StartBtn = () => {
	const dispatch = useDispatch();

	const onStart = () => {
		dispatch(clearBoard());
	};

	return (
		<button className={styles.startBtn} onClick={() => onStart()}>
			Начать заново
		</button>
	);
};
