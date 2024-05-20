import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const countReference = useRef(0);
  return (
  <>
    <div>{countReference.current}</div>
    <button onClick={() => (countReference.current+=1)}>증가</button>
    <button onClick={() => console.log(countReference.current)}>표기</button>

  </>
  );
}

export default App;
