import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Gnb.module.css";

function Gnb() {
    const tabArray = [
        {
            id: 0,
            name: "연재중",
            url: "webtoon?toon=ongoing",
            type: "TAB_ONGOING",
        },
        { id: 1, name: "성인", url: "webtoon?toon=adult", type: "TAB_ADULT" },
        { id: 2, name: "BL/GL", url: "webtoon?toon=bl%2Fgl", type: "TAB_BLGL" },
        {
            id: 3,
            name: "완결",
            url: "webtoon?toon=completed",
            type: "TAB_COMPLETED",
        },
        { id: 4, name: "My", url: "user", type: "TAB_MY" },
        { id: 5, name: "커뮤니티", url: "community", type: "TAB_COMMUNITY" },
    ];
    const tab = useSelector((state) => state.reducerTab);
    let dispatch = useDispatch();
    return (
        <div className={styles.gnb}>
            <ul>
                {tabArray.map((item, index) => (
                    <Link to={item.url} key={item.id}>
                        <li
                            onClick={() => {
                                dispatch({ type: item.type });
                                dispatch({ type: "DEFAULT_PAGE" });
                            }}
                            className={
                                item.name === tab
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
