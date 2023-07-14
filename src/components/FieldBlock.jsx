import React, {useRef, useEffect, useState} from 'react';
import classes from "./FieldBlock.module.scss";
import playBtn from "../image/play-button.png";
import Food from "./Food";
import Snake from "./Snake";
import {useDispatch, useSelector} from "react-redux";
import {startOrPause} from "../redux/gameStatusSlice";


const FieldBlock = () => {
    const dispatch = useDispatch();
    const game = useSelector(state=> state.gameStatus);
    const myRef = useRef(null);

    const [food, setFood] = useState();
    const [currentFoodSize, setCurrentFoodSize] = useState(0);
    const [prevFoodSize, setPrevFoodSize] = useState(0);
    const fieldSize = {width: 13, height: 10};
    const fieldCells = initFieldCells();

    function initFieldCells(){
        let field = [];
        for(let i=0; i<fieldSize.height; i++){
            for(let n=0; n<fieldSize.width; n++){
                field.push({x: n*currentFoodSize, y: i*currentFoodSize});
            }
        }

        return field;
    }


    const handleResize = ()=> { //changing size of food if size of screen changes
        const newFoodSize = myRef.current?.clientWidth;
        return setCurrentFoodSize(newFoodSize);
    };


    const startOrPauseGame = ()=> {
        dispatch(startOrPause());
    }



    useEffect(()=>{ //adding event listeners for resizing of window
        handleResize();
        window.addEventListener('resize', handleResize);

        return ()=> {
            window.removeEventListener("resize",handleResize);
        };
    }, []);



    return (
        <div
            className={classes.field}
            style={{height: currentFoodSize*fieldSize.height, width: currentFoodSize*fieldSize.width}}
            onClick={startOrPauseGame}
        >
            {(!game.started || game.paused) &&
                <div className={classes.field__pause}>
                    <img src={playBtn}/>
                </div>
            }

            <Food
                food={food}
                myRef={myRef}
                currentFoodSize={currentFoodSize}
            />
            <Snake
                fieldCells={fieldCells}
                food={food}
                setFood={setFood}
                currentFoodSize={currentFoodSize}
                fieldSize={fieldSize}
                prevFoodSize={prevFoodSize}
                setPrevFoodSize={setPrevFoodSize}
            />
        </div>
    );
};

export default FieldBlock;