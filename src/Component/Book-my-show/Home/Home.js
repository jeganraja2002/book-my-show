import React from "react";
import Navbar from "../Navbar/Navbar";
import HomeCarouel from "./Home-Carousel";
import ChooseMovie from "./ChooseMovie";
import Events from "./Events";
import Premiere from "./Premiere";
import Footer from "../Footer/Footer";

const Home = () => {

    return(
        <>
            <Navbar/>
            <HomeCarouel/>
            <ChooseMovie/>
            <Events/>
            <Premiere/>
            <Footer/>
        </>
    )
}
export default Home