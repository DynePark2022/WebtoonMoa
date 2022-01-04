import axios from "axios";
const url = "http://localhost:3001";

export const get_data = async (url) => await axios.get(url);

export const get_webtoon_byTab = async (page, limit, toon) =>
    await axios.get(`${url}/webtoon?page=${page}&limit=${limit}&toon=${toon}`);

// auth
export const get_logout = async () =>
    await axios.get(`${url}/logout`, { withCredentials: true });
export const post_login = async (input) =>
    await axios.post(`${url}/login`, input, { withCredentials: true });

// comment
export const add_comment = async (input) =>
    await axios.post(`${url}/comment`, input, { withCredentials: true });

export const delete_comment = async (comment_id) =>
    await axios.delete(`${url}/comment/${comment_id}`, {
        withCredentials: true,
    });
