import React, {useState} from 'react';

function InputSample3(){

    const [inputs, setInputs] = useState({
        name: '',
        nickName: '',
    });

    const {name, nickName} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickName: '',
        });
    }

    return(
        <div>
            <input value={name} name="name" onChange={onChange} placeholder="이름"/>
            <input value={nickName} name="nickName" onChange={onChange} placeholder="닉네임"/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickName})
            </div>
        </div>
    )
}

export default InputSample3;