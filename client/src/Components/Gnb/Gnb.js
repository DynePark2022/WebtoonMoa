import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Gnb.module.css";
import { GnbArray } from "../../DB/text";
import useToggle from "../../Hooks/useToggle";
import {
    DEFAULT_PAGE,
    TAB_CHANGE,
    TAG_CLEAR,
} from "../../Redux/constants/constants";

function Gnb() {
    const tab = useSelector((state) => state.reducerTab);
    const dispatch = useDispatch();
    const [showGnb, toggle] = useToggle(false);
    return (
        <div className={styles.gnb}>
            <ul id={showGnb ? `${styles.showGnb}` : ""}>
                {GnbArray.map((item) => (
                    <Link to={item.url} key={item.id}>
                        <li
                            onClick={() => {
                                dispatch({
                                    type: TAB_CHANGE,
                                    payload: item.name,
                                });
                                dispatch({ type: DEFAULT_PAGE });
                                dispatch({ type: TAG_CLEAR });

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
