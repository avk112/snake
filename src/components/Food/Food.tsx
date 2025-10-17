import React, { FC, RefObject } from "react";
import classes from "./Food.module.scss";
import defaultImg from "../../image/1.png";

interface IFood {
  food: { x: number; y: number; eaten?: boolean; img?: string };
  myRef: RefObject<HTMLDivElement | null>;
  currentFoodSize: number;
}

const Food: FC<IFood> = ({ food, myRef, currentFoodSize }) => {
  return (
    <div className={classes.food} ref={myRef} style={{ height: currentFoodSize, top: food?.y, left: food?.x }}>
      <img src={food?.img ?? defaultImg} alt="food" />
    </div>
  );
};

export default Food;
