import React from 'react';

function User({user, onRemove}){
    return(
        <div>
            id: {user.id}, username: {user.username},  emil: {user.email}            
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove}){
  return (
      <div>
        {users.map((user, index) => 
            <User user={user} key={user.id} onRemove={onRemove} />
        )}
      </div>
  )
}

export default UserList;