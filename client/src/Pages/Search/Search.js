import React from "react";
import styles from "./Search.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Webtoon from "../../Components/Webtoon/Webtoon";

function Search() {
    const { input } = useParams();
    console.log(input);
    const [data, loading, error] = useFetch(
        `http://localhost:3001/webtoon/search/${input}`
    );
    console.log(data);

    return (
        <div className={styles.search}>
            <h1>Searchpage</h1>
            <h2>"{input}"에 대한 검색 결과입니다.</h2>
            <div>
                {data.length === 0 &&
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
