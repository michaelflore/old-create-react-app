import React, { useState, useEffect } from 'react';

export function Timers() {

    const [timers, setTimers] = useState([]);
    const [value, setValue] = useState("");

    const addTimer = () => {
        const parsedValue = parseInt(value, 10);

        if (!isNaN(parsedValue) && parsedValue > 0) {

            setTimers((prevState) => [
                ...prevState,
                {
                    id: Date.now(),
                    value: parsedValue,
                    timeLeft: parsedValue,
                },
            ]);

            setValue(""); // Clear the input after adding the timer
        }
    };

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        let interval = setInterval(() => {
            setTimers(timers => {
                return timers.map(timer => {
                    return {
                        ...timer,
                        timeLeft: timer.timeLeft - 1
                    }
                }).filter((timer) => timer.timeLeft > 0)
            })
        }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [])

    return (
        <div>
            <input type="text" onChange={handleValueChange} value={value} />
            <button onClick={addTimer}>Add Timer</button>
            <div>
                {
                    timers.map((timer) => {
                        return (
                            <div key={timer.id}>
                                {timer.timeLeft} Second(s)
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Timers;


