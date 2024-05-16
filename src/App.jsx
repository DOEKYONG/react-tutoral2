import { useState } from "react";
import "./App.css";

const NON_ADULT_FEE = 10000
const ADULT_FEE = 15000
function App() {
  const [age, setAge] = useState(0);
  const [valid, setValid] = useState(false);
  const [entrance,setEntrance] = useState(NON_ADULT_FEE);


  return (
  <>
  <div>{entrance}</div>
    <input
      type="number"
      value={age}
      onChange={(e) => {
        const changed = e.target.value
        setAge(changed) 
        // setValid((prev) => {
        //   return prev >= 19
        // })
        const changedValid = changed >= 19;
        setValid(changedValid)
        setEntrance(changedValid ? ADULT_FEE : NON_ADULT_FEE)
      }}
    />
    {valid ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>}

  </>);
}

export default App;
