import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Gnb.module.css";
import { GnbArray } from "../../DB/text";

function Gnb() {
    const tab = useSelector((state) => state.reducerTab);
    let dispatch = useDispatch();
    return (
        <div className={styles.gnb}>
            <ul>
                {GnbArray.map((item, index) => (
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
