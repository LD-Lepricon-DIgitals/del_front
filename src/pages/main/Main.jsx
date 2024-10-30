import React from "react";
import "./Main.css"
import "../shared/styles/wrapper.css";
import Navbar from "../shared/navigation/navigation.jsx"
import Footer from "../shared/footer/Footer.jsx";
import Circle from "./components/circle/circle.jsx";
import Layout from "./components/foodButtons/foodBtn.jsx";

function Main() {
    return (
    <>
        <div className="wrapper">
            <Navbar />
            <main className="content">
                <div className="buttons-space">
                    <div style={{display: "flex", justifyContent: "center"}}><h1>Неначе мама <br/> готувала</h1></div>
                    <div >
                        <Layout></Layout>
                    </div>
                </div>
                <div className="c-div">
                    <Circle />
                </div>
            </main>
            <Footer></Footer>
        </div>
    </>
    );
}

export default Main
