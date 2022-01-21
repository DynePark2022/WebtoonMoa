import React from "react";
import { TAG_CHANGE } from "../../../Redux/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterRow.module.css";

function FilterRow({ item, index }) {
    const dispatch = useDispatch();
    const tag = useSelector((state) => state.reducerTag);

    const changeTab = (e) => {
        const copy = [...tag];
        copy[index] = e.target.innerText;
        dispatch({ type: TAG_CHANGE, payload: copy });
    };

    return (
        <div className={styles.filterRow}>
            <div>{item.title}</div>
            <ul>
                {item.list.map((listItem) => (
                    <li
                        key={listItem}
                        onClick={changeTab}
                        id={tag[index] === listItem ? `${styles.selected}` : ""}
                    >
                        {listItem}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterRow;
