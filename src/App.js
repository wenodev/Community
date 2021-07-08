import React, { useState, useRef } from 'react';
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

  return (
    <div style={style}>
      {/* <InputSample/> */}
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />      
    </div>
  );
}

export default App;
