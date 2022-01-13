import React from "react";
import styles from "./CommunityPost.module.css";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { useSelector } from "react-redux";
import { delete_post, patch_post_like } from "../../../api";
import { url } from "../../../api/index";
import Comments from "../../../Components/Comments/Comments";

function CommunityPost() {
    const navigate = useNavigate();
    const userId = useSelector((state) => state.reducerUser._id);
    const { id } = useParams();
    const [post, loading, error, setPost] = useFetch(`${url}/post/${id}`);

    const deletePost = () => {
        window.confirm("글을 삭제할까요?") &&
            delete_post(id)
                .then((res) => {
                    navigate("/community");
                })
                .catch((err) => console.log(err));
    };
    const likePost = () => {
        patch_post_like(id)
            .then((res) => setPost([res.data]))
            .catch((err) => console.log(err));
    };

    return (
        <div className={styles.community_post}>
            <div className={styles.article}>
                <div>{loading && "loading"}</div>
                <div>{error && "loading"}</div>
                {userId === post[0]?.authorId && (
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
                <h2 className={styles.post_title}>{post[0]?.title}</h2>
                <div className={styles.post_detail}>
                    <div className={styles.post_detail_left}>
                        <div>
                            <i className="fas fa-user"></i>
                            <span>{post[0]?.authorName}</span>
                        </div>
                        <div>
                            <i className="fas fa-tag"></i>
                            <span>{post[0]?.category}</span>
                        </div>
                        <div>
                            <i className="fas fa-comment"></i>
                            <span>{post[0]?.commentCount}</span>
                        </div>
                        <div>
                            <i className="fas fa-eye"></i>
                            <span>{post[0]?.viewCount}</span>
                        </div>
                        <div>
                            <i className="fas fa-thumbs-up"></i>
                            <span>{post[0]?.thumbUp.length}</span>
                        </div>
                    </div>
                    <div>
                        <div className={styles.post_created}>
                            <i className="fas fa-clock"></i>
                            <span>{post[0]?.createdAt}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.post_content}>
                    {/* FIXME: DANGER XSS => sanitize */}
                    <div
                        dangerouslySetInnerHTML={{ __html: post[0]?.content }}
                    />
                </div>
                <div
                    className={styles.post_like}
                    id={
                        post[0]?.thumbUp.includes(userId)
                            ? `${styles.post_liked}`
                            : ""
                    }
                    onClick={likePost}
                >
                    <div>{post[0]?.thumbUp.length}</div>
                    <i className="fas fa-thumbs-up"></i>
                </div>
            </div>
            <div className={styles.comments}>
                <Comments postId={post[0]?._id} />
            </div>
        </div>
    );
}

export default CommunityPost;
