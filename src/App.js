import React from 'react';
import InputSample from './InputSample';
import UserList from './UserList';




function App() {

  const style = {
    marginTop : 100,
    padding : 10,
    textAlign : "center"
  }

  return (
    <div style={style}>
      {/* <InputSample/> */}
      <UserList />
    </div>
  );
}

export default App;
