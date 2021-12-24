import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Gnb from "./Components/Gnb";
import Banner from "./Components/Banner";
import WebtoonList from "./Components/WebtoonList/WebtoonList";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import HoverButton from "./Components/HoverButton";

function App() {
    return (
        <div className="App">
            <Header />
            <Gnb />
            <Banner />
            <Routes>
                <Route exact path="/" element={<WebtoonList />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
            <HoverButton />
        </div>
    );
}

export default App;
