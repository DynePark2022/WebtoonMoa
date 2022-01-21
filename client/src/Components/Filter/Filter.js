import React, { useState } from "react";
import styles from "./Filter.module.css";
import { FilterArray } from "../../DB/text";
import FilterRow from "./FilterRow/FilterRow";
import { get_webtoon_byFilter } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_PAGE } from "../../Redux/constants/constants";

function Filter({ route, limit, category, setData }) {
    const page = useSelector((state) => state.reducerPage);
    const tag = useSelector((state) => state.reducerTag);
    const dispatch = useDispatch();
    let [platform, days, genre, age, consonant] = tag;

    const filterSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: DEFAULT_PAGE });

        get_webtoon_byFilter(
            route,
            page,
            limit,
            category,
            platform,
            days,
            genre,
            age,
            consonant
        )
            .then((res) => {
                setData(res.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className={styles.filter}>
            <form className={styles.filter_container}>
                {FilterArray.map((item, index) => (
                    <FilterRow key={item.title} index={index} item={item} />
                ))}
                <button onClick={filterSubmit} className={styles.search}>
                    검색
                </button>
            </form>
        </div>
    );
}

export default Filter;
