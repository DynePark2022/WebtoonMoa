import React, { useState } from "react";
import CommentsForm from "../../CommentsForm/CommentsForm";
import SingleComment from "../SingleComment/SingleComment";
import styles from "./NestedComment.module.css";
import useFetch from "../../../../Hooks/useFetch";

function NestedComment({ parentId }) {
    const [addComment, setAddComment] = useState([]);
    const [data, loading, error] = useFetch(
        `http://localhost:3001/comment/nested/${parentId}`
    );

    return (
        <>
            <div className={styles.nested_comment}>
                {data && (
                    <>
                        {data.map((comment) => (
                            <div
                                className={styles.arrow_position}
                                key={comment._id}
                            >
                                <div className={styles.arrow}>
                                    <i className="fas fa-caret-right"></i>
                                </div>
                                <SingleComment comment={comment} />
                            </div>
                        ))}
                    </>
                )}
                {addComment && (
                    <>
                        {addComment.map((comment) => (
                            <div
                                className={styles.arrow_position}
                                key={comment._id}
                            >
                                <div className={styles.arrow}>
                                    <i className="fas fa-caret-right"></i>
                                </div>
                                <SingleComment comment={comment} />
                            </div>
                        ))}
                    </>
                )}
            </div>
            {/* <div>{loading && "Loading..."}</div>
            <div>{error && "Error!!!"}</div> */}
            <CommentsForm
                parentId={parentId}
                addComment={addComment}
                setAddComment={setAddComment}
                loading={loading}
                error={error}
            />
        </>
    );
}

export default NestedComment;
