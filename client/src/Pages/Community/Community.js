import React from "react";
import { Link } from "react-router-dom";
import styles from "./Community.module.css";

function Community() {
    return (
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
                    <tr>
                        {/* <td>000001</td> */}
                        <td>공지</td>
                        <td>공지글 입니다</td>
                        <td>관리자</td>
                        <td>21.13.32</td>
                        <td>99</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        {/* <td>000001</td> */}
                        <td>공지</td>
                        <td>공지글 입니다</td>
                        <td>관리자</td>
                        <td>21.13.32</td>
                        <td>99</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        {/* <td>000001</td> */}
                        <td>공지</td>
                        <td>공지글 입니다</td>
                        <td>관리자</td>
                        <td>21.13.32</td>
                        <td>99</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <Link to="/write">
                    <button className={styles.button}>글쓰기</button>
                </Link>
            </div>
        </div>
    );
}

export default Community;
