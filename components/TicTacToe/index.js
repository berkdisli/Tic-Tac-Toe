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