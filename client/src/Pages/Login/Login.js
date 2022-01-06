import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../../Components/InputForm/InputForm";
import styles from "./Login.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Login() {
    useSelector((state) => state);
    let dispatch = useDispatch();

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const LoginArray = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "이메일",
            errorMessage: "올바른 이메일 양식을 입력해 주세요",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "비밀번호",
            required: true,
        },
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/login", values, {
                withCredentials: true,
            })
            .then((res) => {
                dispatch({ type: "GET_USER", payload: res.data });
                navigate("/");
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h4>로그인</h4>
                </div>
                <form action="/login" method="POST" className={styles.mid}>
                    {LoginArray.map((input) => (
                        <InputForm
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button onClick={handleSubmit} type="submit">
                        로그인
                    </button>
                </form>
                <div className={styles.bot}>
                    <Link to="/signup">회원가입</Link>
                    <Link to="/findpassword">비밀번호 찾기</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
