import { useState } from "react";

function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    function toggle(value) {
        setValue((currentValue) =>
            typeof value === "boolean" ? value : !currentValue
        );
    }
    return [value, toggle];
}

export default useToggle;
