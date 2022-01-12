import React from "react";
import styles from "./CommunityPost.module.css";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { useSelector } from "react-redux";
import { delete_post, patch_post_viewCount } from "../../../api";
import { url } from "../../../api/index";

function CommunityPost() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.reducerUser);
    const { id } = useParams();
    const [posts, loading, error, setPosts] = useFetch(`${url}/post/${id}`);

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
            .then((res) => setPosts([res.data]))
            .catch((err) => console.log(err));
    };

    return (
        <div className={styles.community_post}>
            <div>{loading && "loading"}</div>
            <div>{error && "loading"}</div>
            {user.email === posts[0]?.email && (
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
            <h2 className={styles.post_title}>{posts[0]?.title}</h2>
            <div className={styles.post_detail}>
                <div className={styles.post_detail_left}>
                    <div>
                        <i className="fas fa-user"></i>
                        <span>{posts[0]?.username}</span>
                    </div>
                    <div>
                        <i className="fas fa-tag"></i>
                        <span>{posts[0]?.category}</span>
                    </div>
                    <div>
                        <i className="fas fa-comment"></i>
                        <span>{posts[0]?.commentCount}</span>
                    </div>
                    <div>
                        <i className="fas fa-eye"></i>
                        <span>{posts[0]?.viewCount}</span>
                    </div>
                    <div>
                        <i className="fas fa-thumbs-up"></i>
                        <span>{posts[0]?.thumbUp.length}</span>
                    </div>
                </div>
                <div>
                    <div className={styles.post_created}>
                        <i className="fas fa-clock"></i>
                        <span>{posts[0]?.createdAt}</span>
                    </div>
                </div>
            </div>
            <div className={styles.post_content}>
                {/* FIXME: DANGER XSS => sanitize */}
                <div dangerouslySetInnerHTML={{ __html: posts[0]?.content }} />
            </div>
            <div
                className={styles.post_like}
                id={
                    posts[0]?.thumbUp.includes(user._id)
                        ? `${styles.iLiked}`
                        : ""
                }
                onClick={() => increaseViewCount()}
            >
                <div>{posts[0]?.thumbUp.length}</div>
                <i className="fas fa-thumbs-up"></i>
            </div>
            <div className={styles.comments}></div>
        </div>
    );
}

export default CommunityPost;
