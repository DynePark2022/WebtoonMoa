import React, { useState } from "react";
import styles from "./Filter.module.css";
import { FilterArray } from "../../DB/text";
import FilterRow from "./FilterRow/FilterRow";
import useFetchFilter from "../../Hooks/useFetchFilter";

function Filter({ route, page, limit, category, setData }) {
    const [tags, setTags] = useState(["전체", "전체", "전체", "전체", "전체"]);

    const useFilterSubmit = (e) => {
        e.preventDefault();
        let [platform, day, genre, age, consonant] = tags;
        const { data, loading, error, meta } = useFetchFilter(
            route,
            page,
            limit,
            category,
            platform,
            day,
            genre,
            age,
            consonant
        );
        console.log(data);
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
                <button onClick={useFilterSubmit} className={styles.search}>
                    검색
                </button>
            </form>
        </div>
    );
}

export default Filter;

// () => setTags({ ...tags })

// onClick={
//     item.title === "연재"
//         ? () =>
//               setTags({
//                   ...tags,
//                   연재: tag,
//               })
//         : item.title === "요일"
//         ? () =>
//               setTags({
//                   ...tags,
//                   요일: tag,
//               })
//         : item.title === "장르"
//         ? () =>
//               setTags({
//                   ...tags,
//                   장르: tag,
//               })
//         : item.title === "나이"
//         ? () =>
//               setTags({
//                   ...tags,
//                   나이: tag,
//               })
//         : item.title === "초성"
//         ? () =>
//               setTags({
//                   ...tags,
//                   초성: tag,
//               })
//         : () => setTags({ ...tags })
// }
