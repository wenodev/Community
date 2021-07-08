import React from 'react';

function User({user}){
    return(
        <div>
            username: {user.username},  emil: {user.email}
        </div>
    )
}

function UserList({users}){
  return (
      <div>
        {users.map((user, index) => 
            <User user={user} key={index} />
        )}
      </div>
  )
}

export default UserList;