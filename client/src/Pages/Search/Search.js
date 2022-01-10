import React from "react";
import styles from "./Search.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Webtoon from "../../Components/Webtoon/Webtoon";

function Search() {
    const { input } = useParams();
    const [data, loading, error] = useFetch(
        `http://localhost:3001/webtoon/search/${input}`
    );

    return (
        <div className={styles.search}>
            <h3>"{input}"에 대한 검색 결과입니다.</h3>
            <div className={styles.not_found}>
                {!loading &&
                    data.length === 0 &&
                    "찾으시는 웹툰이 없습니다. 웹툰 제목이나 작가로 검색해 주세요."}
            </div>
            <div className={styles.webtoonList}>
                {data.length > 0 && (
                    <div className={styles.webtoons}>
                        {data.map((webtoon) => (
                            <Webtoon key={webtoon._id} webtoon={webtoon} />
                        ))}
                    </div>
                )}
            </div>
            <div>{loading && "Loading..."}</div>
            <div>{error && "Error!!!"}</div>
        </div>
    );
}

export default Search;
