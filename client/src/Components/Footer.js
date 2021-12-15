import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer>
            <div className={styles.top}>
                <Link to="/login">로그인</Link>
                <Link to="/signup">회원가입</Link>
                <Link to="/signup">고객센터</Link>
            </div>
            <div className={styles.bottom}>
                웹툰모아는 비영리, 웹툰 비교 웹사이트입니다. <br /> 웹툰은 모두
                공식 홈페이지로 연결되어 있습니다.
            </div>
        </footer>
    );
}

export default Footer;
