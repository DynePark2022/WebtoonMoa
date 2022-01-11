import React from "react";
import Webtoon from "../../Components/Webtoon/Webtoon";
import styles from "./WebtoonList.module.css";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetchByCategory from "../../Hooks/useFetchByCateogry";

function WebtoonList() {
    const page = useSelector((state) => state.reducerPage);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    console.log(category);
    const limit = 4;
    const route = "webtoon";
    const { data, loading, error } = useFetchByCategory(
        route,
        page,
        limit,
        category
    );

    console.log(data);

    const handleSubmit = () => {
        dispatch({ type: "INCREASE_PAGE" });
    };
    return (
        <div className={styles.webtoonList}>
            <div className={styles.webtoons}>
                {data.map((webtoon) => (
                    <Webtoon key={webtoon._id} webtoon={webtoon} />
                ))}
            </div>

            <div>{loading && "Loading..."}</div>
            <div>{error && "Error!!!"}</div>
            <button disabled={loading} onClick={handleSubmit}>
                더보기
            </button>
        </div>
    );
}

export default WebtoonList;
