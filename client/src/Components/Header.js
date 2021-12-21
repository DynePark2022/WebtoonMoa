import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <Link to="/">
                    <h1>WebtoonMoa</h1>
                    {/* <img src="#" alt="Main Logo" />  */}
                </Link>
            </div>
            <div className={styles.icons}>
                <i class="fas fa-search"></i>
                <i class="fas fa-folder-open"></i>
                <Link to="/user">
                    <i class="fas fa-user"></i>
                </Link>
                <Link to="/login">
                    <i class="fas fa-lock"></i>{" "}
                </Link>
                <i class="fas fa-bars"></i>
            </div>
        </header>
    );
}

export default Header;
