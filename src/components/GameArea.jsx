import React from 'react';
import classes from "./GameArea.module.scss";
import FieldBlock from "./FieldBlock";
import InfoBlock from "./InfoBlock";
import {useDispatch} from "react-redux";
import {refreshGame} from "../redux/gameStatusSlice";
import ButtonsBlock from "./ButtonsBlock";

const GameArea = () => {
    const dispatch = useDispatch();
    const newGame = ()=> {
        dispatch(refreshGame());
    }



    return (
        <div className={classes.gameArea}>
            <InfoBlock/>
            <FieldBlock/>
            <ButtonsBlock/>
            <button onClick={newGame}>
                New Game
            </button>
        </div>
    );
};

export default GameArea;