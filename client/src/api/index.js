import axios from "axios";
const url = "http://localhost:3001";

export const get_webtoon = () => axios.get(`${url}/webtoon`);
export const get_logout = () =>
    axios.get(`${url}/logout`, { withCredentials: true });
export const post_login = (input) =>
    axios.post(`${url}/login`, input, { withCredentials: true });
