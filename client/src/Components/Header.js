import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { signOut } from "../actions/user";

function Header() {
    const username = useSelector((state) => state.reducerUser.user.username);
    let dispatch = useDispatch();

    return (
        <header>
            <div className={styles.logo}>
                <Link to="/">
                    <h1>WebtoonMoa</h1>
                    {/* <img src="#" alt="Main Logo" />  */}
                </Link>
            </div>
            <div className={styles.icons}>
                {username ? (
                    <button onClick={() => dispatch(signOut())}>
                        로그아웃
                    </button>
                ) : (
                    <Link to="/login">
                        <button>로그인</button>
                    </Link>
                )}
                <i className="fas fa-search"></i>
                <i className="fas fa-folder-open"></i>
                <Link to="/user">
                    <i className="fas fa-user"></i>
                    <span>{username}</span>
                </Link>
                <i className="fas fa-bars"></i>

                {/* {username ? <span>hello, {username}</span> : null} */}
                {/* <i className="fas fa-search"></i>
                <i className="fas fa-folder-open"></i>
                <Link to="/user">
                    <i className="fas fa-user"></i>
                </Link>
                <Link to="/login">
                    <i className="fas fa-lock"></i>{" "}
                </Link>
                <Link to="/out">
                    <i className="fas fa-lock"></i>{" "}
                </Link>
                <i className="fas fa-bars"></i> */}
            </div>
        </header>
    );
}

export default Header;
