import styles from "./TicTacToe.module.css";
import { useEffect, useState } from "react";

const players = {
    CPU: {
        SYM: "O",
        NAME: "CPU"
    },

    NAME: {
        SYM: "X",
        NAME: "You"
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}