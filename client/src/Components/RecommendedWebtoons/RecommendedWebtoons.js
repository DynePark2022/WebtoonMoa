import React from "react";
import styles from "./RecommendedWebtoons.module.css";
import Webtoon from "../../Components/Webtoon/Webtoon";
import useFetch from "../../Hooks/useFetch";
import { url } from "../../api/index";

function RecommendedWebtoons({ genre }) {
    const [webtoons, loading, error] = useFetch(
        `${url}/webtoon/recommended?genre=${genre[0]}`
    );

    return (
        <div className={styles.recommend}>
            <h3>다른 웹툰 추천</h3>
            {webtoons && (
                <div className={styles.recommend_list}>
                    {webtoons.map((toon) => (
                        <Webtoon key={toon._id} webtoon={toon} />
                    ))}
                </div>
            )}
            <div>{loading && "Loading..."}</div>
            <div>{error && "Error!!!"}</div>
        </div>
    );
}

export default RecommendedWebtoons;
