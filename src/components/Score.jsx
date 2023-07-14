import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {refresh} from "../redux/scoreSlice";
import classes from "./Score.module.scss";

const Score = () => {
    const dispatch = useDispatch();
    const score = useSelector(state=>state.score.score);
    const game = useSelector(state=> state.gameStatus);
    const record = localStorage.getItem("scoreRecord") ? Number(localStorage.getItem("scoreRecord")): 0;

    useEffect(()=>{
        if(!game.started && !game.finished && !game.paused && score!==0){
            (score > record) && localStorage.setItem("scoreRecord", score)
            dispatch(refresh());
        }
        if(game.finished){
            (score > record) && localStorage.setItem("scoreRecord", score)
        }
    }, [game]);



    return (
        <div className={classes.score}>
            <div className={classes.score__board}>
                <h3 className={classes.score__board__title}>Score:</h3>
                <span>{score}</span>
            </div>
            <div className={classes.score__board}>
                <h3 className={classes.score__board__title}>Record:</h3>
                <span>{record}</span>
            </div>
        </div>
    );
};

export default Score;