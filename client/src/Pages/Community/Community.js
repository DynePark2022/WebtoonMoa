import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import styles from "./Community.module.css";
import { categoryArray } from "../../DB/text";

function Community() {
    const navigate = useNavigate();
    const [data] = useFetch(`http://localhost:3001/post/`);
    const [tab, setTab] = useState("전체");
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    return (
        data && (
            <div className={styles.community}>
                <h2>Community {category}</h2>
                <div className={styles.top_buttons}></div>
                <ul className={styles.category}>
                    {categoryArray.map((category) => (
                        <Link to={category.url}>
                            <li
                                className={styles.category_tab}
                                id={
                                    tab === category.name &&
                                    `${styles.selected}`
                                }
                                key={category.name}
                                onClick={() => setTab(category.name)}
                            >
                                {category.name}
                            </li>
                        </Link>
                    ))}
                </ul>
                <table>
                    <thead>
                        <tr>
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
