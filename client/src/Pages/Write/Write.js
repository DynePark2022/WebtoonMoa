import React, { useState } from "react";
import styles from "./Write.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector } from "react-redux";
import { add_post } from "../../api";
import { useNavigate } from "react-router-dom";
import { categoryTab } from "../../DB/text";

function Write() {
    const user = useSelector((state) => state.reducerUser);
    const navigate = useNavigate();

    const defaultValue = {
        title: "",
        content: "",
        username: user.username,
        email: user.email,
        category: "일반",
    };
    const [values, setValues] = useState(defaultValue);

    const handleSubmit = async (e) => {
        e.preventDefault();
        add_post(values)
            .then((res) => {
                console.log(res);
                navigate(`/community`);
            })
            .catch((err) => {
                alert(err);
            });
        setValues(defaultValue);
    };

    return (
        <div className={styles.write}>
            <h1 className={styles.header}>글쓰기</h1>
            <ul className={styles.category}>
                {categoryTab.map((tab, i) => (
                    <li
                        key={tab}
                        onClick={() => setValues({ ...values, category: tab })}
                        className={styles.category_tab}
                        id={
                            tab === values.category
                                ? `${styles.selected_tab}`
                                : ""
                        }
                    >
                        {tab}
                    </li>
                ))}
            </ul>
            <form>
                <div className={styles.form_top}>
                    <label htmlFor="title">제목</label>
                    <input
                        maxLength="30"
                        id="title"
                        type="text"
                        onChange={(e) =>
                            setValues({
                                ...values,
                                title: e.target.value,
                            })
                        }
                    />
                </div>
                <CKEditor
                    editor={ClassicEditor}
                    data={values.content}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setValues({ ...values, content: data });
                    }}
                />
                <button className={styles.button} onClick={handleSubmit}>
                    작성
                </button>
            </form>
        </div>
    );
}

export default Write;
