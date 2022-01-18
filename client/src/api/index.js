import axios from "axios";

export const url = "http://localhost:3001";

export const get_data = async (url) => await axios.get(url);

export const get_data_byCategory = async (route, page, limit, category) =>
    await axios.get(
        `${url}/${route}?page=${page}&limit=${limit}&category=${category}`
    );

//
export const get_webtoon_byFilter = async (
    route,
    page,
    limit,
    category,
    platform,
    day,
    genre,
    age,
    consonant
) =>
    await axios.get(
        `${url}/${route}?page=${page}&limit=${limit}&category=${category}&platform=${platform}&day=${day}&genre=${genre}&age=${age}&consonant=${consonant}`
    );

// auth
export const post_signup = async (signupInput) => {
    await axios.post(`${url}/signup`, signupInput);
};

export const post_login = async (loginInput) =>
    await axios.post(`${url}/login`, loginInput, { withCredentials: true });

export const get_logout = async () =>
    await axios.get(`${url}/logout`, { withCredentials: true });

// community post

export const get_posts = async (category) =>
    await axios.get(`${url}/post?category=${category}`);

export const get_single_post = async (post_id) =>
    await axios.get(`${url}/post/${post_id}`);

export const add_post = async (post) =>
    await axios.post(`${url}/post`, post, { withCredentials: true });

export const delete_post = async (post_id) =>
    await axios.delete(`${url}/post/${post_id}`, { withCredentials: true });

export const patch_post_like = async (post_id) =>
    await axios.patch(
        `${url}/post/like`,
        { post_id },
        { withCredentials: true }
    );

// comment
export const add_comment = async (comment) =>
    await axios.post(`${url}/comment`, comment, { withCredentials: true });

export const patch_comment_like = async (comment_id) =>
    await axios.patch(
        `${url}/comment/like`,
        { comment_id },
        { withCredentials: true }
    );

export const delete_comment = async (comment_id) =>
    await axios.delete(`${url}/comment/${comment_id}`, {
        withCredentials: true,
    });

// user

export const get_user = async () =>
    await axios.get(`${url}/check`, { withCredentials: true });

export const patch_user = async (webtoon_id) =>
    await axios.patch(
        `${url}/user/bookmark`,
        { webtoon_id },
        { withCredentials: true }
    );
