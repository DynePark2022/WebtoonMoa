import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Community.module.css";
import { categoryArray } from "../../DB/text";
import useFetchPage from "../../Hooks/useFetchPage";

function Community() {
    const navigate = useNavigate();
    const [tab, setTab] = useState("전체");
    const [page, setPage] = useState(1);
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    const limit = 10;
    const route = "post";
    const { data, loading, error, meta } = useFetchPage(
        route,
        page,
        limit,
        category
    );

    const maxpage = Math.ceil(meta.total / meta.limit) || 1;
    const pageArray = Array(maxpage)
        .fill(null)
        .map((_, i) => i + 1);

    return (
        <div className={styles.community}>
            <h2>
                Community {category} {page}
            </h2>
            <div className={styles.top_buttons}></div>
            <ul className={styles.category}>
                {categoryArray.map((category) => (
                    <Link key={category.name} to={category.url}>
                        <li
                            className={styles.category_tab}
                            id={
                                tab === category.name
                                    ? `${styles.selected}`
                                    : ""
                            }
                            onClick={() => {
                                setTab(category.name);
                                setPage(1);
                            }}
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
                            onClick={() => navigate(`/community/${post._id}`)}
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
            <div>{loading && "loading"}</div>
            <div>{error && "error"}</div>
            <div className={styles.page_buttons}>
                <ul>
                    <li>
                        <i
                            onClick={() => {
                                setPage(1);
                            }}
                            className="fas fa-angle-double-left"
                        />
                    </li>
                    <li>
                        <i
                            onClick={() => {
                                setPage(page - 1);
                            }}
                            className="fas fa-angle-left"
                        />
                    </li>
                    {pageArray.map((e) => (
                        <li
                            id={page === e ? `${styles.current_page}` : ""}
                            onClick={() => setPage(e)}
                            key={e}
                        >
                            {e}
                        </li>
                    ))}
                    <li>
                        <i
                            onClick={() => {
                                setPage(page + 1);
                            }}
                            className="fas fa-angle-right"
                        />
                    </li>
                    <li>
                        <i
                            onClick={() => {
                                setPage(maxpage);
                            }}
                            className="fas fa-angle-double-right"
                        />
                    </li>
                </ul>
            </div>
            <div>
                <Link to="/write">
                    <button className={styles.button}>글쓰기</button>
                </Link>
            </div>
        </div>
    );
}

export default Community;
