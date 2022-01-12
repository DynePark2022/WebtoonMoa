import React from "react";
import { useSelector } from "react-redux";
import styles from "./My.module.css";
import Webtoon from "../../Components/Webtoon/Webtoon";
import useFetch from "../../Hooks/useFetch";
import { url } from "../../api/index";

function My() {
    const user = useSelector((state) => state.reducerUser);
    const bookmarked = user.bookmark;
    const [webtoons, loading, error] = useFetch(
        `${url}/webtoon/bookmark?ids=${bookmarked}`
    );

    return (
        <div className={styles.my}>
            <h3>{user.username}님이 찜한 웹툰</h3>
            <div>{loading && "Loading..."}</div>
            <div className={styles.webtoonList}>
                {webtoons && !error ? (
                    <div className={styles.webtoons}>
                        {webtoons.map((webtoon) => (
                            <Webtoon key={webtoon._id} webtoon={webtoon} />
                        ))}
                    </div>
                ) : (
                    <h4>북마크한 웹툰이 없습니다.</h4>
                )}
            </div>
        </div>
    );
}

export default My;
