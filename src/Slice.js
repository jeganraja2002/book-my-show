import { createSlice } from "@reduxjs/toolkit";
import Data from './Data.json'

const Slice = createSlice({
    name:"book-my-show",
    initialState:{
        Arr:Data
    },
    reducers:{
        update:(state,action)=>{
            state.Arr.MovieList=action.payload  
        }
    }
})

export default Slice.reducer
export const{update}=Slice.actions