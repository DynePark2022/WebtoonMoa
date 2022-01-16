import React, { useState } from "react";
import styles from "./Filter.module.css";
import { FilterArray } from "../../DB/text";

function Filter() {
    const [platform, setPlatform] = useState("전체");

    //FIXME: change to one useState

    const [tags, setTags] = useState({
        연재: "전체",
        요일: "전체",
        장르: "전체",
        나이: "전체",
        초성: "전체",
    });
    console.log(tags);
    return (
        <div className={styles.filter}>
            <form className={styles.filter_container}>
                {FilterArray.map((item) => (
                    <div key={item.title}>
                        <div>{item.title}</div>
                        {item.list.map((tag) => (
                            <ul key={tag}>
                                <li
                                    id={
                                        tags.연재 === tag
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
