import React from "react";
import { useSelector } from "react-redux";
import styles from "./My.module.css";
import Webtoon from "../../Components/Webtoon/Webtoon";
import useFetch from "../../Hooks/useFetch";

function My() {
    const user = useSelector((state) => state.reducerUser);
    const booked = user.bookmark;
    const [data, loading, error] = useFetch(
        `http://localhost:3001/webtoon/bookmark?ids=${booked}`
    );
    return (
        <div className={styles.my}>
            <h1>{user.username}님이 찜한 웹툰</h1>
            <div>{loading && "Loading..."}</div>
            <div>{error && "Error!!!"}</div>
            <div className={styles.webtoonList}>
                {data && (
                    <div className={styles.webtoons}>
                        {data.map((webtoon) => (
                            <Webtoon key={webtoon._id} webtoon={webtoon} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default My;
