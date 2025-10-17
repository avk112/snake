import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../redux/scoreSlice";
import classes from "./Score.module.scss";
import { RootState } from "../../redux";

interface IScore {}

const Score: FC<IScore> = () => {
  const dispatch = useDispatch();
  const score = useSelector((state: RootState) => state.score.score);
  const game = useSelector((state: RootState) => state.gameStatus);
  const record = localStorage.getItem("scoreRecord") ? Number(localStorage.getItem("scoreRecord")) : 0;

  useEffect(() => {
    if (!game.started && !game.finished && !game.paused && score !== 0) {
      score > record && localStorage.setItem("scoreRecord", String(score));
      dispatch(refresh());
    }
    if (game.finished) {
      score > record && localStorage.setItem("scoreRecord", String(score));
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
