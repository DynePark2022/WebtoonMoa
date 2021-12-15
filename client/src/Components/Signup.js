import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "./InputForm";
import styles from "./Signup.module.css";
import termsOfUse from "../DB/termsOfUse";

function Signup() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "닉네임",
            errorMessage:
                "영문, 한글, 숫자 2~12자. 특수문자는 사용 할 수 없습니다.",
            required: true,
            pattern: `^[ㄱ-ㅎ가-힣A-Za-z0-9].{1,11}$`,
            // pattern: `^[ㄱ-ㅎ가-힣A-Za-z0-9].{2,12}$`,
            // bug?
            label: "Username",
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "이메일",
            errorMessage: "올바른 이메일을 적어주세요.",
            required: true,
            label: "Email",
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "비밀번호",
            errorMessage: "8~20자. 문자와 숫자 1개를 포함하여야 합니다.",
            required: true,
            pattern: `^(?=.*?[A-Za-z#?!@$%^&*-])(?=.*?[0-9]).{8,20}$`,
            label: "Password",
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "비밀번호 확인",
            errorMessage: "비밀번호가 일치하지 않습니다.",
            required: true,
            pattern: values.password,
            label: "Confirm Password",
        },
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(e.target.name);
    };

    console.log(values);
    return (
        <div className={styles.signup}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h4>회원가입</h4>
                </div>

                <form action="/signup" method="POST" className={styles.mid}>
                    {inputs.map((input) => (
                        <InputForm
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <div className={styles.termsOfUse}>{termsOfUse}</div>
                    <label for={styles.checkbox}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            placeholder="닉네임"
                            required
                        />
                        (필수)
                        <strong>이용약관</strong>에 동의합니다.
                    </label>
                    <button type="submit">회원가입</button>
                </form>

                <div className={styles.bot}>
                    <Link to="/login">로그인</Link>
                    <Link to="/findpassword">비밀번호 찾기</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
