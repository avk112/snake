import React from 'react';
import classes from "./Food.module.scss";


const Food = ({food, myRef, currentFoodSize}) => {

    return (
        <div
            className={classes.food}
            ref={myRef}
            style={{height: currentFoodSize, top:food?.y, left:food?.x}}
        >
            <img src={food?.img} alt="food"/>
        </div>
    );
};

export default Food;