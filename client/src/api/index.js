import axios from "axios";
const url = "http://localhost:3001";

// export const get_webtoon = (page, limit) =>
//     axios.get(`${url}/webtoon?page=${page}&limit=${limit}`);
export const get_webtoon_byTab = async (page, limit, toon) =>
    await axios.get(`${url}/webtoon?page=${page}&limit=${limit}&toon=${toon}`);
export const get_logout = async () =>
    await axios.get(`${url}/logout`, { withCredentials: true });
export const post_login = async (input) =>
    await axios.post(`${url}/login`, input, { withCredentials: true });

export const delete_comment = async (comment_id) => {
    window.confirm("댓글을 삭제할까요?") &&
        (await axios
            .delete(`${url}/comment/${comment_id}`, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err)));
};

// export const post_comment = async (input) => {
//     const result = await axios
//         .post("http://localhost:3001/comment", input)
//         .then((res) => {
//             alert("댓글이 작성되었습니다.");
//         })
//         .catch((err) => {
//             alert(err);
//         });
//     return result;
// };
