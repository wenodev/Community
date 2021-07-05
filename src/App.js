import React, { useState, useRef, useEffect } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {

  const [inputs, setIntpus] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setIntpus({
      ...inputs,
      [name]: value,
    })
  }

    const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);

    useEffect(() => {
    console.log("nextId: ", nextId);
  }, )


  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    }

    setUsers([...users, user]);

    setIntpus({
      username: '',
      email: ''
    })
    nextId.current += 1;
  }

  const style = {
    marginTop : 100,
    padding : 10,
    textAlign : "center"
  }

  return (
    <div style={style}>
      {/* <InputSample/> */}
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users}/>      
    </div>
  );
}

export default App;
