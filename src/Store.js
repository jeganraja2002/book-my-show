import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

const Store = configureStore({
    reducer:{
        book:Slice
    }
})
export default Store