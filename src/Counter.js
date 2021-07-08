import React, {useState} from 'react';

function Counter(){

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(a => a + 1);
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    return(
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    )
}

export default Counter;