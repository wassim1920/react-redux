import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: "counter",
    initialState : 0 , 
    reducers : {
        increment : (state , action)=>{
           return state+action.payload ;
        },
        decrement : (state , action)=>{
           return state-action.payload ;
        }
    }
})
export const {increment , decrement}=counter.actions;
export default counter.reducer; 
