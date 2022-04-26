import { useState } from "react";

export default function TicTacToe() {
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [isCPUNext, setIsCPUNext] = useState(false);
    const [winner, setWinner] = useState(null);


    return (
        <div>
            <div>{!winner && displayTurn()}</div>
            <div className={styles.container}>
                <div className={styles.col}>
                    <span onClick={() => playFn(0, 0)} className={styles.cell}>
                        {board[0][0]}
                    </span>
                    <span onClick={() => playFn(0, 1)} className={styles.cell}>
                        {board[0][1]}
                    </span>
                    <span onClick={() => playFn(0, 2)} className={styles.cell}>
                        {board[0][2]}
                    </span>
                </div>
                <div className={styles.col}>
                    <span onClick={() => playFn(1, 0)} className={styles.cell}>
                        {board[1][0]}
                    </span>
                    <span onClick={() => playFn(1, 1)} className={styles.cell}>
                        {board[1][1]}
                    </span>
                    <span onClick={() => playFn(1, 2)} className={styles.cell}>
                        {board[1][2]}
                    </span>
                </div>
                <div className={styles.col}>
                    <span onClick={() => playFn(2, 0)} className={styles.cell}>
                        {board[2][0]}
                    </span>
                    <span onClick={() => playFn(2, 1)} className={styles.cell}>
                        {board[2][1]}
                    </span>
                    <span onClick={() => playFn(2, 2)} className={styles.cell}>
                        {board[2][2]}
                    </span>
                </div>
            </div>
            );
            {winner && <h2>{displayWinner()}</h2>}
            {winner && (
                <button className={styles.video_game_button} onClick={playAgainFn}>
                    Play Again
                </button>
            )}
        </div>
    )
}