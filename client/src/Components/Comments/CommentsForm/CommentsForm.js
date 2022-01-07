import React, { useState } from "react";
import styles from "./CommentsForm.module.css";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import InputForm from "../../InputForm/InputForm";
import { add_comment } from "../../../api";

function CommentsForm({ addComment, setAddComment, loading, parentId }) {
    const user = useSelector((state) => state.reducerUser);

    const { id } = useParams();
    const defaultValue = {
        username: user.username,
        email: user.email,
        postId: id,
        comment: "",
        parentId: "",
    };
    const [values, setValues] = useState(defaultValue);

    const onChange = (e) => {
        setValues({ ...values, parentId: parentId, comment: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        add_comment(values)
            .then((res) => {
                setAddComment([...addComment, res.data]);
                alert("댓글이 작성되었습니다.");
            })
            .catch((err) => {
                alert(err);
            });
        setValues(defaultValue);
    };
    return (
        <div className={styles.comments_form}>
            <div className={styles.submit_form}>
                {user.username ? (
                    <form action="/comments" method="POST">
                        <div className={styles.comments_top}>
                            <div className={styles.my_userid}>
                                {user.username}
                            </div>
                            <div className={styles.form_length}>
                                {values.comment.length}/200
                            </div>
                        </div>
                        <InputForm
                            maxLength="200"
                            value={values.comment}
                            onChange={onChange}
                            placeholder="주제와 무관한 댓글이나 광고, 스포일러, 악플은 경고조치 없이 삭제되며 징계 대상이 될 수 있습니다."
                        />
                        <div className={styles.comments_bottom}>
                            <button
                                onClick={handleSubmit}
                                disabled={
                                    loading || values.comment.length === 0
                                }
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
        </div>
    );
}

export default CommentsForm;
