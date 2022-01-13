import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { signOut } from "../../Redux/actions/actions";
import Searchbox from "./Searchbox.js/Searchbox";

function Header() {
    const user = useSelector((state) => state.reducerUser);
    let dispatch = useDispatch();

    return (
        <header>
            <div className={styles.logo}>
                <Link to="/">
                    <h1 onClick={() => dispatch({ type: "TAB_CLEAR" })}>
                        WebtoonMoa
                    </h1>
                </Link>
            </div>
            <div className={styles.hello}>
                {user.username && `안녕하세요 ${user.username}님`}
            </div>
            <div className={styles.icons}>
                <Searchbox />

                {user.username ? (
                    <Link to="/">
                        <button
                            className={styles.auth}
                            onClick={() => {
                                dispatch(signOut());
                                dispatch({ type: "TAB_CLEAR" });
                            }}
                        >
                            로그아웃
                        </button>
                    </Link>
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
