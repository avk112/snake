import React, { FC } from "react";
import snakeHead from "../../image/snake.png";
import classes from "./SnakeCell.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

interface ISnakeCell {
  item: { [key: string]: any };
  index: number;
  currentFoodSize: number;
  currentDirection: string;
}

const SnakeCell: FC<ISnakeCell> = ({ item, index, currentFoodSize, currentDirection }) => {
  const game = useSelector((state: RootState) => state.gameStatus);

  const snakeClass = index === 0 ? classes.snakeHead : classes.snake;
  const gameFinishedClass = game.finished && classes.gameOver;
  const animationDelay = game.isWin ? `${index * 200}ms` : "0s";
  const outline = item?.eaten && "2px solid grey";
  const zIndex = item?.eaten && 2;

  return (
    <div
      className={`${snakeClass} ${gameFinishedClass}`}
      style={{
        width: currentFoodSize,
        height: currentFoodSize,
        top: item?.y,
        left: item?.x,
        outline: outline,
        zIndex: zIndex,
        animationDelay: animationDelay,
      }}
    >
      {index === 0 && <img src={snakeHead} alt="head of snake" className={classes[currentDirection]} />}
    </div>
  );
};

export default React.memo(SnakeCell);
