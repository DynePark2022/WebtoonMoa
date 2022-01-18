import React, { useState } from "react";
import styles from "./Filter.module.css";
import { FilterArray } from "../../DB/text";
import FilterRow from "./FilterRow/FilterRow";
import { get_webtoon_byFilter } from "../../api";

function Filter({ route, page, limit, category, setData }) {
    const [tags, setTags] = useState(["전체", "전체", "전체", "전체", "전체"]);

    const filterSubmit = (e) => {
        e.preventDefault();
        let [platform, day, genre, age, consonant] = tags;
        get_webtoon_byFilter(
            route,
            page,
            limit,
            category,
            platform,
            day,
            genre,
            age,
            consonant
        )
            .then((res) => {
                setData(res.data.data);
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className={styles.filter}>
            <form className={styles.filter_container}>
                {FilterArray.map((item, index) => (
                    <FilterRow
                        key={item.title}
                        index={index}
                        item={item}
                        tags={tags}
                        setTags={setTags}
                    />
                ))}
                <button onClick={filterSubmit} className={styles.search}>
                    검색
                </button>
            </form>
        </div>
    );
}

export default Filter;
