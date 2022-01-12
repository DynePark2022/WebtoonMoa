import React from "react";
import useToggle from "../../Hooks/useToggle";
import styles from "./InputForm.module.css";

function InputForm(props) {
    const { errorMessage, ...otherProps } = props;
    const [focused, toggle] = useToggle(false);

    return (
        <div className={styles.inputForm}>
            <input
                {...otherProps}
                onBlur={() => toggle(true)}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
}

export default InputForm;
