import React, { useState } from "react";
import styles from "./Filter.module.css";
import { FilterArray } from "../../DB/text";

function Filter() {
    const [platform, setPlatform] = useState("전체");
    const [day, setDay] = useState("전체");
    const [genre, setGenre] = useState("전체");
    const [age, setAge] = useState("전체");
    const [consonant, setConsonant] = useState("전체");

    // platform:"전체",
    // day:"전체",
    // genre:"전체",
    // age:"전체",
    // consonant:"전체",

    //FIXME: change to one useState

    return (
        <div className={styles.filter}>
            <form className={styles.filter_container}>
                {FilterArray.map((item) => (
                    <div key={item.title}>
                        <div>{item.title}</div>
                        {item.list.map((tag) => (
                            <ul key={tag}>
                                <li
                                    onClick={() => setPlatform(tag)}
                                    id={
                                        platform === tag
                                            ? `${styles.selected}`
                                            : ""
                                    }
                                >
                                    {tag}
                                </li>
                            </ul>
                        ))}
                    </div>
                ))}
                <button className={styles.search}>검색</button>
            </form>
        </div>
    );
}

export default Filter;
