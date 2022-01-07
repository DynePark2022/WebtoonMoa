import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Gnb from "./Components/Gnb/Gnb";
import Banner from "./Components/Banner/Banner";
import WebtoonList from "./Pages/WebtoonList/WebtoonList";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import HoverButton from "./Components/HoverButton/HoverButton";
import Main from "./Pages/Main/Main";
import WebtoonDetail from "./Pages/WebtoonDetail/WebtoonDetail";
import My from "./Pages/My/My";
import { get_user } from "./api";
import { useDispatch } from "react-redux";
import { GET_USER, LOGOUT } from "./Redux/constants/constants";
import Search from "./Pages/Search/Search";

function App() {
    let dispatch = useDispatch();
    get_user()
        .then((res) => {
            dispatch({ type: GET_USER, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: LOGOUT });
        });

    return (
        <div className="App">
            <Header />
            <Gnb />
            <Banner />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/webtoon" element={<WebtoonList />} />
                <Route path="/webtoon/:id" element={<WebtoonDetail />} />
                <Route path="/search/:input" element={<Search />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/user" element={<My />} />
            </Routes>
            <Footer />
            <HoverButton />
        </div>
    );
}

export default App;
