import React, { useEffect } from "react";
import Webtoon from "./Webtoon";
import styles from "./WebtoonList.module.css";
// import dummy from "../../DB/data.json";
import { getWebtoon } from "../../actions/webtoon";
import { useDispatch, useSelector } from "react-redux";

function WebtoonList() {
    const webtoons = useSelector((state) => state.reducerWebtoon);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWebtoon());
    }, []);

    // let allWebtoons = dummy.webtoons;
    // if (true) {
    //     allWebtoons.length = 32;
    // }
    // let sampleWebtoons = allWebtoons;
    return (
        <div className={styles.webtoonList}>
            <div className={styles.webtoons}>
                {webtoons.map((webtoon) => (
                    <Webtoon key={webtoon._id} webtoon={webtoon} />
                ))}
            </div>
            <button>더보기</button>
        </div>
    );
}

export default WebtoonList;
