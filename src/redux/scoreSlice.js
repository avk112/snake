import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    score:0,
};

const scoreSlice = createSlice({
    name: "score",
    initialState,
    reducers: {
        increment: {
            reducer(state, action){
                state.score+=action.payload.number;
            }
        },
        refresh: {
            reducer(){
                return initialState;
            }
        }
    }
});

export const {increment, refresh} = scoreSlice.actions;
export default scoreSlice.reducer;