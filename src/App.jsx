import { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);
  const [valid, setValid] = useState(false);


  return (
  <>
    <input
      type="number"
      value={age}
      onChange={ (e) => {
        const changed = e.target.value
        setAge(changed) 
        setValid(changed >= 19)
      }}
    />
    {valid ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>}

  </>);
}

export default App;
