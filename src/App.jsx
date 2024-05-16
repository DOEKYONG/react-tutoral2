import { useState } from "react";
import "./App.css";

function IncreaseButtonComponent({setCount}) {
  return (
    <>
      <button 
            className="increase-button" 
            onClick={() => {
              setCount((prev)=>prev+1);
            }}
          >
            증가
        </button>
    </>
  )
}
function DecreaseButtonComponent({setCount}) {
  return (
    <>
      <button
          className="decrease-button"
          onClick={() => {
            setCount((previousCount) => previousCount-1);
          }}
        >
          감소
        </button>
    </>
    )
}

function App() {
  const [count, setCount] = useState(0);

  return (
  <>

    <div style={{ marginBottom:10}}>{count}</div>
    <div style={{display:'flex', flexDirection:'row', gap:10}}>
      <IncreaseButtonComponent setCount={setCount} />
      <DecreaseButtonComponent setCount={setCount} />
      
    </div>
  </>);
}

export default App;
