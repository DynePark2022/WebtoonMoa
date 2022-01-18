import React, { useState } from "react";
import Webtoon from "../../Components/Webtoon/Webtoon";
import styles from "./WebtoonList.module.css";
import { useSearchParams } from "react-router-dom";
import useFetchPageAppend from "../../Hooks/useFetchPageAppend";
import Filter from "../../Components/Filter/Filter";

function WebtoonList() {
    const [page, setPage] = useState(1);
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    const limit = 16;
    const route = "webtoon";
    const { data, loading, error, meta, setData } = useFetchPageAppend(
        route,
        page,
        limit,
        category
    );
    const handleSubmit = () => {
        setPage(page + 1);
    };
    return (
        <div className={styles.webtoonList}>
            <Filter
                route={route}
                page={page}
                limit={limit}
                category={category}
                setData={setData}
            />
            <div className={styles.webtoons}>
                {data.map((webtoon) => (
                    <Webtoon key={webtoon._id} webtoon={webtoon} />
                ))}
            </div>
            <h5>{loading && "Loading..."}</h5>
            <h5>{error && "Error!!!"}</h5>
            <h5>{!meta.nextPage ? "마지막 페이지 입니다." : ""}</h5>
            <button disabled={loading || !meta.nextPage} onClick={handleSubmit}>
                더보기
            </button>
        </div>
    );
}

export default WebtoonList;
