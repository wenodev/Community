import React, { useState, useRef, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log("활성 사용자 수를 세는중...");
  return users.filter(user => user.active).length;
}

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
        email: 'public.velopert@gmail.com',
        active: true
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
      }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    }
    setUsers(users.concat(user));

    setIntpus({
      username: '',
      email: ''
    })
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(
      users.map(user => 
        user.id === id ? {...user, active: !user.active} : user
        )
    );
    
  }

  const style = {
    margin : 100,
    padding : 10,
    textAlign : "left"
  }

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div style={style}>
      {/* <InputSample/> */}
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </div>
  );
}

export default App;
