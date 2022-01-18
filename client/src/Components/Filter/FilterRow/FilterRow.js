import React from "react";
import styles from "./FilterRow.module.css";

function FilterRow({ item, tags, setTags, index }) {
    const changeTab = (e) => {
        const copy = [...tags];
        copy[index] = e.target.innerText;
        setTags(copy);
    };
    return (
        <div className={styles.filterRow}>
            <div>{item.title}</div>
            <ul>
                {item.list.map((listItem) => (
                    <li
                        key={listItem}
                        onClick={changeTab}
                        id={
                            tags[index] === listItem ? `${styles.selected}` : ""
                        }
                    >
                        {listItem}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterRow;
