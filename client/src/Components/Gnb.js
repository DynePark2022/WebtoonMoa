import React from "react";
import styles from "./Gnb.module.css";

function Gnb() {
    return (
        <div className={styles.gnb}>
            <ul>
                <li>연재</li>
                <li>완결</li>
                <li>BEST</li>
                <li>성인</li>
                <li>장르</li>
                {/* <li>커뮤니티</li> */}
                {/* <li>고객센터</li> */}
            </ul>
        </div>
    );
}

export default Gnb;
