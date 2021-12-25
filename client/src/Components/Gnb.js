import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Gnb.module.css";

function Gnb() {
    const tabArray = [
        { id: 0, name: "연재", url: "a" },
        { id: 1, name: "완결", url: "b" },
        { id: 2, name: "BEST", url: "c" },
        { id: 3, name: "성인", url: "d" },
        { id: 4, name: "My", url: "e" },
        { id: 5, name: "커뮤니티", url: "f" },
    ];

    const [tab, setTab] = useState(null);

    return (
        <div className={styles.gnb}>
            <ul>
                {tabArray.map((item, index) => (
                    <Link to={item.url} key={item.id}>
                        <li
                            onClick={() => setTab(index)}
                            className={
                                index === tab
                                    ? `${styles.selected_tab}`
                                    : undefined
                            }
                        >
                            {item.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Gnb;
