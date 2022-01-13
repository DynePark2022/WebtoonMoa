import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../../Components/InputForm/InputForm";
import styles from "./Signup.module.css";
import termsOfUse from "../../DB/termsOfUse";
import { post_signup } from "../../api";

function Signup() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const SignUpArray = [
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post_signup(values)
            .then((res) => {
                alert("회원가입 되었습니다!");
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    };

    return (
        <div className={styles.signup}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h3>회원가입</h3>
                </div>

                <form className={styles.mid}>
                    {SignUpArray.map((input) => (
                        <InputForm
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <div className={styles.termsOfUse}>{termsOfUse}</div>
                    <label htmlFor={styles.checkbox}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            placeholder="닉네임"
                            required
                        />
                        (필수)<strong>이용약관</strong>에 동의합니다.
                    </label>
                    <button onClick={handleSubmit}>회원가입</button>
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
