import React from "react";
import CommentsForm from "../../CommentsForm/CommentsForm";
import SingleComment from "../SingleComment/SingleComment";
import styles from "./NestedComment.module.css";
import useFetch from "../../../../Hooks/useFetch";
import { url } from "../../../../api/index";

function NestedComment({ parentId }) {
    const [comments, loading, error, setComments] = useFetch(
        `${url}/comment/nested/${parentId}`
    );

    return (
        <div className={styles.nested_comment}>
            {comments && (
                <div>
                    {comments.map((comment) => (
                        <div className={styles.arrow_wrapper} key={comment._id}>
                            <div className={styles.arrow}>
                                <i className="fas fa-caret-right"></i>
                            </div>
                            <SingleComment comment={comment} />
                        </div>
                    ))}
                </div>
            )}
            <CommentsForm
                parentId={parentId}
                comments={comments}
                setComments={setComments}
                loading={loading}
                error={error}
            />
        </div>
    );
}

export default NestedComment;
