import styles from './Info.module.css';
import { useSelector } from 'react-redux';
import { boardSelector, xIsNextSelector } from '../../selectors';
import { checkVictory } from '../../helpers';
import { players } from '../../constants';

export const Info = () => {
	const board = useSelector(boardSelector);
	const xIsNext = useSelector(xIsNextSelector);
	const winner = checkVictory(board);

	const renderInfo = () => {
		let msg;

		if (winner) {
			msg = `Победил: ${winner.winner}`;
		} else if (board.includes(null)) {
			msg = `Сейчас ходит: ${xIsNext ? players.PLAYER_X : players.PLAYER_O}`;
		} else {
			msg = `Ничья!`;
		}

		return msg;
	};

	return <p className={styles.info}>{renderInfo()}</p>;
};
