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
                    <h1 onClick={() => dispatch({ type: "TAB_CLEAR" })}>
                        WebtoonMoa
                    </h1>
                    {/* <img src="#" alt="Main Logo" />  */}
                </Link>
            </div>
            {username && <div>안녕하세요 {username}님</div>}
            <div className={styles.icons}>
                <button onClick={() => dispatch({ type: "TEMP" })}>
                    임시 로그인
                </button>
                <i className="fas fa-search"></i>
                {username ? (
                    <>
                        {/* <span>안녕하세요 {username}님   </span> */}
                        <button
                            className={styles.auth}
                            onClick={() => {
                                dispatch(signOut());
                                dispatch({ type: "TAB_CLEAR" });
                            }}
                        >
                            로그아웃
                        </button>
                    </>
                ) : (
                    <Link to="/login">
                        <button
                            className={styles.auth}
                            onClick={() => dispatch({ type: "TAB_CLEAR" })}
                        >
                            로그인
                        </button>
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Header;
