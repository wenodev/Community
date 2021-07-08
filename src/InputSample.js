import React, {useState, useRef} from 'react';

function InputSample(){

    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })

    const nameInput = useRef();

    const  {name, nickname} = inputs; // 비구조화 할당

    const onChange = (e) => {
        console.log(e.target.value);
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };

    return (
    <div>
      <input 
        name="name" 
        placeholder="이름" 
        onChange={onChange} 
        value={name} 
        ref={nameInput}
        />
      <input 
        name="nickname" 
        placeholder="닉네임"
         onChange={onChange}
          value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
    );
}

export default InputSample;