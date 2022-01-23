import React from "react";
import styles from "./UpdatedWebtoons.module.css";
import useFetch from "../../Hooks/useFetch";
import { url } from "../../api/index";

function UpdatedWebtoons() {
    const [webtoons, loading, error] = useFetch(`${url}/webtoon/updated`);

    return (
        <div className={styles.UpdatedWebtoons}>
            <h3>최신 업데이트</h3>
            {webtoons && (
                <li className={styles.update_list}>
                    {webtoons.map((toon) => (
                        <ul key={toon._id}>
                            <div className={styles.update_img_container}>
                                <img src={toon.image} alt={toon.title} />
                            </div>
                            <div className={styles.update_title}>
                                {toon.title}
                            </div>
                        </ul>
                    ))}
                </li>
            )}
            <div>{loading && "Loading..."}</div>
            <div>{error && "Error!!!"}</div>
        </div>
    );
}

export default UpdatedWebtoons;
