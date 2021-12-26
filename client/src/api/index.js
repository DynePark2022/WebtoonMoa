import axios from "axios";
const url = "http://localhost:3001";

// export const get_webtoon = (page, limit) =>
//     axios.get(`${url}/webtoon?page=${page}&limit=${limit}`);
export const get_webtoon_byTab = (page, limit, toon) =>
    axios.get(`${url}/webtoon?page=${page}&limit=${limit}&toon=${toon}`);
export const get_logout = () =>
    axios.get(`${url}/logout`, { withCredentials: true });
export const post_login = (input) =>
    axios.post(`${url}/login`, input, { withCredentials: true });
