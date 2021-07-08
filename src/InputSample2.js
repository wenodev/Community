import React, {useState} from 'react';

function InputSample2(){

    const [inputs, setInputs] = useState({
        name: '',
        nickName: '',
    })

    const {name, nickName} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value,
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
            <input placeholder="이름" value={name} name="name"  onChange={onChange} />
            <input placeholder="닉네임" value={nickName} name="nickName" onChange={onChange} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickName})
            </div>
        </div>
    )

}

export default InputSample2;