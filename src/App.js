import React from 'react';
import InputSample from './InputSample';
import InputSample3 from './InputSample3';


function App() {

  const style = {
    marginTop : 100,
    padding : 10,
    textAlign : "center"
  }

  return (
    <div style={style}>
      <InputSample/>
      {/* <InputSample3/> */}
    </div>
  );
}

export default App;
