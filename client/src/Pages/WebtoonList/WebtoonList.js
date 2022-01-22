import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Webtoon from "../../Components/Webtoon/Webtoon";
import styles from "./WebtoonList.module.css";
import { useSearchParams } from "react-router-dom";
import useFetchPageAppend from "../../Hooks/useFetchPageAppend";
import Filter from "../../Components/Filter/Filter";
import { INCREASE_PAGE } from "../../Redux/constants/constants";

function WebtoonList() {
    const page = useSelector((state) => state.reducerPage);
    const dispatch = useDispatch();
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
        dispatch({ type: INCREASE_PAGE });
    };

    return (
        <div className={styles.webtoonList}>
            <Filter
                route={route}
                limit={limit}
                category={category}
                setData={setData}
            />
            <div className={styles.webtoons}>
                {data.map((webtoon) => (
                    <Webtoon key={webtoon._id} webtoon={webtoon} />
                ))}
            </div>
            <h5>{data.length === 0 && "찾으신 결과가 없습니다."}</h5>
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
