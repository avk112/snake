import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    started:false,
    finished: false,
    isWin: false,
    paused: false,
};

const gameStatusSlice = createSlice({
    name: "gameStatus",
    initialState,
    reducers: {
        startGame: {
            reducer(state){
                state.started = true;
                state.paused = false;
            }
        },
        finishGame: {
            reducer(state, action){
                state.finished = true;
                state.isWin = action.payload.isWin;
            },
            prepare(win=false){
                return {
                    payload: {
                        isWin: win,
                    }
                }
            }
        },
        pauseGame: {
            reducer(state){
                state.paused = true;
            }
        },
        startOrPause: {
            reducer(state){
                if(!state.finished && (state.paused || !state.started)){
                    state.started = true;
                    state.paused = false;
                }
                else if(!state.finished && state.started && !state.paused){
                    state.paused = true;
                }
            }
        },
        refreshGame: {
            reducer(){
                return initialState;
            }
        }
    }
});

export const {startGame, finishGame, pauseGame, startOrPause, refreshGame} = gameStatusSlice.actions;
export default gameStatusSlice.reducer;