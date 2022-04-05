import React from "react";
import './index.css'
import Nav from "./components/Nav";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App(props){
    return(
        <div>
            <Nav />
            <Body />
            <Footer />
        </div>
    )
}

export default App;