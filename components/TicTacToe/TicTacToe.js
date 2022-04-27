import { useEffect, useState } from "react";

export default function TicTacToe() {
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [isCPUNext, setIsCPUNext] = useState(false);
    const [winner, setWinner] = useState(null);

    // The playFn function will check if the game is over. If it is, it will display the winner. 
    // If not, it will check if the player is next.
    function playFn(arrayIndex, index) {
        if (isCPUNext) return;
        if (winner) return;
        board[arrayIndex][index] = players?.SYM;
        setBoard((board) => [...board]);
        checkWinner();
        setIsCPUNext(true);
    }

    // This useEffect Hook runs once the component is mounted, checking if the game is over. 
    // If it is, it will return. If it is not, it will check if the CPU is next. 
    // If it is, it will call the cPUPlay function to play the game.
    useEffect(() => {
        if (winner) return;
        if (isCPUNext) {
            CPUPlay();
        }
    }, [isCPUNext]);

    // The cPUPlay function checks if the game is over. 
    // If it is, it will return. If it is not, it will call sleep for 10 seconds, 
    // then call the getCPUTurn function
    function CPUPlay() {
        if (winner) return;
        sleep(1000);

        const CPUMove = getCPUTurn();
        board[CPUMove.arrayIndex][CPUMove.index] = players?.CPU?.SYM;

        setBoard((board) => [...board]);
        checkWinner();
        setIsCPUNext(false);
    }

    // This function will loop through the board array and find all the empty cells, 
    // then, it will randomly select one of the empty cells.
    function getCPUTurn() {
        const emptyIndexes = [];
        board.forEach((row, arrayIndex) => {
            row.forEach((cell, index) => {
                if (cell === "") {
                    emptyIndexes.push({ arrayIndex, index });
                }
            });
        });
        const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
        return emptyIndexes[randomIndex];
    }


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