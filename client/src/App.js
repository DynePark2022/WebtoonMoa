import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Gnb from "./Components/Gnb/Gnb";
import Banner from "./Components/Banner/Banner";
import WebtoonList from "./Pages/WebtoonList/WebtoonList";
import Footer from "./Components/Footer/Footer";
import Signup from "./Pages/Signup/Signup";
import HoverButton from "./Components/HoverButton/HoverButton";
import Main from "./Pages/Main/Main";
import WebtoonDetail from "./Pages/WebtoonDetail/WebtoonDetail";
import My from "./Pages/My/My";
import { get_user } from "./api";
import { useDispatch } from "react-redux";
import { GET_USER, LOGOUT } from "./Redux/constants/constants";
import Search from "./Pages/Search/Search";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import Community from "./Pages/Community/Community";
import CommunityPost from "./Pages/Community/CommunityPost.js/CommunityPost";
import Write from "./Pages/Write/Write";

const Login = React.lazy(() => import("./Pages/Login/Login"));

function App() {
    let dispatch = useDispatch();
    get_user()
        .then((res) => {
            dispatch({ type: GET_USER, payload: res.data });
        })
        .catch((err) => {
            console.log("no user");
            dispatch({ type: LOGOUT });
        });

    return (
        <div className="App">
            <Header />
            <Gnb />
            <Banner />
            <Suspense fallback={<p>loading...</p>}>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/webtoon" element={<WebtoonList />} />
                    <Route path="/webtoon/:id" element={<WebtoonDetail />} />
                    <Route path="/search/:input" element={<Search />} />
                    <Route exact path="/community" element={<Community />} />
                    <Route path="/community/:id" element={<CommunityPost />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route exact path="/write" element={<Write />} />
                        <Route exact path="/user" element={<My />} />
                    </Route>
                </Routes>
            </Suspense>
            <Footer />
            <HoverButton />
        </div>
    );
}

export default App;
