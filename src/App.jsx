import styles from './App.module.css';
import { Game } from './components';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<Game />
		</div>
	);
};
