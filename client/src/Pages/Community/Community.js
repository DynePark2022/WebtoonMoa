import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import styles from "./Community.module.css";

function Community() {
    const navigate = useNavigate();
    const [data, loading, error] = useFetch(`http://localhost:3001/post/`);
    console.log(data);

    return (
        data && (
            <div className={styles.community}>
                <div className={styles.top_buttons}></div>
                <ul className={styles.category}>
                    <li className={styles.category_tab}>전체글</li>
                    <li className={styles.category_tab}>개념글</li>
                    <li className={styles.category_tab}>공지</li>
                </ul>
                <table>
                    <thead>
                        <tr>
                            {/* <th>번호</th> */}
                            <th>말머리</th>
                            <th>제목</th>
                            <th>글쓴이</th>
                            <th>잘성일</th>
                            <th>조회</th>
                            <th>추천</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((post) => (
                            <tr
                                key={post._id}
                                onClick={() =>
                                    navigate(`/community/${post._id}`)
                                }
                            >
                                <td>{post.category}</td>
                                <td>{post.title}</td>
                                <td>{post.username}</td>
                                <td>{post.createdAt}</td>
                                <td>{post.viewCount}</td>
                                <td>{post.thumbUp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <Link to="/write">
                        <button className={styles.button}>글쓰기</button>
                    </Link>
                </div>
            </div>
        )
    );
}

export default Community;
