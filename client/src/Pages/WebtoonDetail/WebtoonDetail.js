import React from "react";
import styles from "./WebtoonDetail.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

import Comments from "../../Components/Comments/Comments";
import { useDispatch, useSelector } from "react-redux";
import { patch_user } from "../../api";
import { UPDATE_BOOKMARK } from "../../Redux/constants/constants";
import { url } from "../../api/index";
import UpdatedWebtoons from "../../Components/UpdatedWebtoons/UpdatedWebtoons";
import RecommendedWebtoons from "../../Components/RecommendedWebtoons/RecommendedWebtoons";

function WebtoonDetail() {
    const { id } = useParams();
    const [webtoon, loading, error] = useFetch(`${url}/webtoon/${id}`);
    const user = useSelector((state) => state.reducerUser);
    const dispatch = useDispatch();
    const submitBookmark = async () => {
        patch_user(webtoon._id)
            .then((res) => {
                dispatch({
                    type: UPDATE_BOOKMARK,
                    payload: { bookmark: res.data.bookmark },
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={styles.webtoon_detail}>
            <div>{loading && "Loading..."}</div>
            <div>{error && "Error!!!"}</div>
            <div className={styles.top}>
                <div className={styles.webtoon_detail_main}>
                    <div className={styles.main_title}>
                        <h3>{webtoon.title}</h3>
                    </div>
                    <div className={styles.main_info}>
                        <div className={styles.info_wrap}>
                            <div className={styles.img_container}>
                                <img src={webtoon.image} alt={webtoon.title} />
                            </div>
                            <div className={styles.table_container}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>??????</th>
                                            <td>{webtoon.genre?.join(", ")}</td>
                                        </tr>
                                        <tr>
                                            <th>??????</th>
                                            <td>{webtoon.original || "-"}</td>
                                        </tr>
                                        <tr>
                                            <th>??????</th>
                                            <td>
                                                {webtoon.author?.join(", ") ||
                                                    "-"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>?????????</th>
                                            <td>{webtoon.publisher || "-"}</td>
                                        </tr>
                                        <tr>
                                            <th>?????????</th>
                                            <td>{webtoon.platform || "-"}</td>
                                        </tr>
                                        <tr>
                                            <th>?????? ??????</th>
                                            <td>{webtoon.published || "-"}</td>
                                        </tr>
                                        <tr>
                                            <th>?????? ??????</th>
                                            <td>
                                                {webtoon.days?.join(", ") ||
                                                    "-"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>?????? ??????</th>
                                            <td>{webtoon.age || "-"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className={styles.buttons}>
                                    {webtoon.first_episode_url && (
                                        <a href={webtoon.first_episode_url}>
                                            ?????? ??????
                                        </a>
                                    )}
                                    {webtoon.lastest_episode_url && (
                                        <a href={webtoon.lastest_episode_url}>
                                            ????????? {webtoon.latested_episode}{" "}
                                            ??????
                                        </a>
                                    )}
                                    <a href={webtoon.url}>????????????</a>
                                    <button
                                        id={
                                            user.bookmark.includes(webtoon._id)
                                                ? `${styles.bookmarked}`
                                                : null
                                        }
                                        onClick={submitBookmark}
                                    >
                                        <i className="fas fa-bookmark"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.main_synopsis}>
                            <h3>?????????</h3>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        webtoon.synopsis ||
                                        "???????????? ????????????.",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <aside className={styles.aside}>
                    <UpdatedWebtoons />
                </aside>
            </div>
            <div className={styles.bottom}>
                <Comments postId={webtoon._id} />
                {webtoon.genre && <RecommendedWebtoons genre={webtoon.genre} />}
            </div>
        </div>
    );
}

export default WebtoonDetail;
