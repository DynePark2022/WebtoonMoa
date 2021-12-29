import React, { useState } from "react";
import InputForm from "../InputForm";
import styles from "./CommentList.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Comment from "./Comment";

function Comments() {
    const user = "RandomID";
    const webtoon_id = "1";
    // const user = "";

    const [values, setValues] = useState({
        user,
        webtoon_id,
        comment: "",
    });

    const onChange = (e) => {
        setValues({ ...values, comment: e.target.value });
    };

    console.log(values);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/comments", values, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div className={styles.comments}>
            <h3>Comments</h3>
            <div className={styles.submit_form}>
                {user ? (
                    <form action="/comments" method="POST">
                        <div className={styles.comments_top}>
                            <div className={styles.my_userid}>{user}</div>
                            <div className={styles.form_length}>
                                {values.comment.length}/200
                            </div>
                        </div>
                        <InputForm
                            onChange={onChange}
                            placeholder="주제와 무관한 댓글이나 광고, 스포일러, 악플은 경고조치 없이 삭제되며 징계 대상이 될 수 있습니다."
                        />
                        <div className={styles.comments_bottom}>
                            <button
                                onClick={handleSubmit}
                                className={styles.button_submit}
                            >
                                등록
                            </button>
                        </div>
                    </form>
                ) : (
                    <div>
                        댓글을 작성하려면 <Link to="/login">로그인</Link>{" "}
                        해주세요
                    </div>
                )}
            </div>
            <div className={styles.comments_list}>
                <Comment />
            </div>
        </div>
    );
}

export default Comments;
