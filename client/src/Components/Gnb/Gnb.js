import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Gnb.module.css";
import { GnbArray } from "../../DB/text";
import useToggle from "../../Hooks/useToggle";

function Gnb() {
    const tab = useSelector((state) => state.reducerTab);
    const dispatch = useDispatch();
    const [showGnb, toggle] = useToggle(false);
    return (
        <div className={styles.gnb}>
            <ul id={showGnb ? `${styles.showGnb}` : ""}>
                {GnbArray.map((item, index) => (
                    <Link to={item.url} key={item.id}>
                        <li
                            onClick={() => {
                                dispatch({ type: item.type });
                                dispatch({ type: "DEFAULT_PAGE" });
                                toggle(false);
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
            <button onClick={toggle} className={styles.bars}>
                <i className="fas fa-bars"></i>
            </button>
        </div>
    );
}

export default Gnb;
