import React, { useState, useEffect } from "react";

function Timer({ timer, setTimer }) {

    const [reStart, setReStart] = useState(false);

    useEffect(() => {
        if (timer != 0) {
            const interval = setInterval(() => {
                setTimer((prevState) => prevState - 1);
            }, 1000);
        } else {
            setTimer(!prevState);
        };
    }, []);

    return <p>{timer}</p>;
};

export default Timer;