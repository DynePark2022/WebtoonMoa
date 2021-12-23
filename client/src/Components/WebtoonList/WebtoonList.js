import React, { useState } from "react";
import Webtoon from "./Webtoon";
import styles from "./WebtoonList.module.css";
import useWebtoonSearch from "../../actions/useWebtoonSearch";

function WebtoonList() {
    const [page, setPage] = useState(1);
    let limit = 8;
    const { webtoons, loading, error } = useWebtoonSearch(page, limit);

    const handleSubmit = () => {
        setPage(page + 1);
    };
    return (
        <div className={styles.webtoonList}>
            <div className={styles.webtoons}>
                {webtoons.map((webtoon) => (
                    <Webtoon key={webtoon._id} webtoon={webtoon} />
                ))}
            </div>

            <div>{loading && "Loading..."}</div>
            <div>{error && "Error!!!"}</div>
            <button onClick={handleSubmit}>더보기</button>
        </div>
    );
}

export default WebtoonList;
