import React from "react";
import styles from "./CommunityPost.module.css";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { useSelector } from "react-redux";
import { delete_post, patch_post_viewCount } from "../../../api";

function CommunityPost() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.reducerUser);
    const { id } = useParams();
    const [data, loading, error] = useFetch(`http://localhost:3001/post/${id}`);
    const post = data[0];

    const deletePost = () => {
        window.confirm("글을 삭제할까요?") &&
            delete_post(id)
                .then((res) => {
                    console.log(res);
                    navigate("/community");
                })
                .catch((err) => console.log(err));
    };

    const increaseViewCount = () => {
        patch_post_viewCount(id)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        data && (
            <div className={styles.community_post}>
                <div>{loading && "loading"}</div>
                <div>{error && "loading"}</div>
                {user.username === post.username && (
                    <div className={styles.buttons}>
                        <div className={styles.delete} onClick={deletePost}>
                            <i className="fas fa-trash"></i>
                            <span>삭제</span>
                        </div>
                        <div className={styles.edit}>
                            <i className="fas fa-pen"></i>
                            <span>수정</span>
                        </div>
                    </div>
                )}
                <h2 className={styles.post_title}>{post.title}</h2>
                <div className={styles.post_detail}>
                    <div className={styles.post_detail_left}>
                        <div>
                            <i className="fas fa-user"></i>
                            <span>{post.username}</span>
                        </div>
                        <div>
                            <i className="fas fa-tag"></i>
                            <span>{post.category}</span>
                        </div>
                        <div>
                            <i className="fas fa-comment"></i>
                            <span>{post.commentCount}</span>
                        </div>
                        <div>
                            <i className="fas fa-eye"></i>
                            <span>{post.viewCount}</span>
                        </div>
                        <div>
                            <i className="fas fa-thumbs-up"></i>
                            <span>{post.thumbUp.length}</span>
                        </div>
                    </div>
                    <div className="post_detail_right">
                        <div className={styles.post_created}>
                            <i className="fas fa-clock"></i>
                            <span>{post.createdAt}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.post_content}>
                    {/* TODO: BE sanitize */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
                <div
                    className={styles.post_like}
                    id={
                        post.thumbUp.includes(user._id)
                            ? `${styles.iLiked}`
                            : ""
                    }
                    onClick={() => increaseViewCount()}
                >
                    <div>{post.thumbUp.length}</div>
                    <i className="fas fa-thumbs-up"></i>
                </div>
                <div className={styles.comments}>
                    {/* TODO: add comment feature */}
                </div>
            </div>
        )
    );
}

export default CommunityPost;
