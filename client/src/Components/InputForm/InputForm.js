import React, { useState } from "react";
import styles from "./InputForm.module.css";

function InputForm(props) {
    const { errorMessage, onChange, id, ...otherProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <div className={styles.inputForm}>
            <input
                {...otherProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
}

export default InputForm;
