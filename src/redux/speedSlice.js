import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    speed: 1,
};

const speedSlice = createSlice({
    name: "speed",
    initialState,
    reducers: {
        toggleSpeed:{
            reducer(state, action){
                state.speed=action.payload.number;
            }
        }
    }
});

export const {toggleSpeed} = speedSlice.actions;
export default speedSlice.reducer