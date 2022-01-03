import React from "react";
import Webtoon from "../../Components/Webtoon/Webtoon";
import styles from "./WebtoonList.module.css";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useWebtoonSearch from "../../Hooks/useWebtoonSearch";

function WebtoonList() {
    const page = useSelector((state) => state.reducerPage);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const toon = searchParams.get("toon");
    const limit = 4;
    const { webtoons, loading, error } = useWebtoonSearch(page, limit, toon);

    const handleSubmit = () => {
        dispatch({ type: "INCREASE_PAGE" });
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
