import axios from "axios";
const url = "http://localhost:3001";

export const get_data = async (url) =>
    await axios.get(url, { withCredentials: true });

export const get_webtoon_byTab = async (page, limit, toon) =>
    await axios.get(`${url}/webtoon?page=${page}&limit=${limit}&toon=${toon}`);

// auth
export const get_logout = async () =>
    await axios.get(`${url}/logout`, { withCredentials: true });
export const post_login = async (login) =>
    await axios.post(`${url}/login`, login, { withCredentials: true });

// comment
export const add_comment = async (comment) =>
    await axios.post(`${url}/comment`, comment, { withCredentials: true });

export const like_comment = async (comment_id) => {
    await axios.patch(`${url}/webtoon/like/${comment_id}`, {
        withCredentials: true,
    });
};

export const dislike_comment = async (comment_id) => {
    await axios.patch(`${url}/webtoon/dislike/${comment_id}`, {
        withCredentials: true,
    });
};

export const delete_comment = async (comment_id) =>
    await axios.delete(`${url}/comment/${comment_id}`, {
        withCredentials: true,
    });

// webtoon
export const bookmark_webtoon = async (webtoon_id) => {
    await axios.get(`${url}/user/bookmark/${webtoon_id}`, {
        withCredentials: true,
    });
};
