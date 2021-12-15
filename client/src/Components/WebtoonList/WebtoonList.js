import React from "react";
import Webtoon from "./Webtoon";
import styles from "./WebtoonList.module.css";
import dummy from "../../DB/data.json";

function WebtoonList() {
    let allWebtoons = dummy.webtoons;
    if (true) {
        allWebtoons.length = 32;
    }
    let sampleWebtoons = allWebtoons;
    return (
        <div className={styles.webtoonList}>
            <div className={styles.webtoons}>
                {sampleWebtoons.map((webtoon) => (
                    <Webtoon key={webtoon.id} webtoon={webtoon} />
                ))}
            </div>
            <button>더보기</button>
        </div>
    );
}

export default WebtoonList;
