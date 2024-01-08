import React from "react";
import Navbar from "../Navbar/Navbar";
import Movie from "./Movie";
import Footer from '../Footer/Footer'
import About from "./About";

const Detail = () => {
    return(
        <>
            <Navbar/>
            <Movie/>
            <About/>
            <Footer/>
        </>
    )
}

export default Detail