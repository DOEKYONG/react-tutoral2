import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
  <>

    <div style={{ marginBottom:10}}>{count}</div>
    <div style={{display:'flex', flexDirection:'row', gap:10}}>
      <button 
        className="increase-button" 
        onClick={(e) => {
          setCount((previousCount) => previousCount+1);
        }}
      >
        증가
      </button>
      <button
        className="decrease-button"
        onClick={(e) => {
          setCount((previousCount) => previousCount-1);
        }}
      >
        감소
        </button>
    </div>
  </>);
}

export default App;
