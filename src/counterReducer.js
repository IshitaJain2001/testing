 //reducer 
//  slice - store ka piece 

import { createSlice } from "@reduxjs/toolkit";

//actions , reducer fn , initial state 

const counter=    createSlice({
    name :"counter",
    initialState :{val :0 },
    reducers :{
increment:(state)=>{
state.val += 1
}, 
decrement:()=>{
    state.val -= 1
}
    }
})
export const {increment, decrement}= counter.actions 
export default counter.reducer