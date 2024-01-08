import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Book-my-show/Home/Home";
import Detail from "./Component/Book-my-show/Movie-Home/Detail";
import Theater from "./Component/Book-my-show/Select-Time/Theater";
import Select from "./Component/Book-my-show/SeatBooking/Select";
import Payment from "./Component/Book-my-show/Payment/Payment";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Detail" element={<Detail/>}/>
                <Route path="/Timing" element={<Theater/>}/>
                <Route path="/Booking" element={<Select/>}/>
                <Route path="/Payment" element={<Payment/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router