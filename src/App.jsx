import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const countReference = useRef(0);
  // Render 가 일어날 때마다 표기 | countReference 를 '조작'하고, '표기 했을 때 어떠한 Render도 발생하지 않음
  return (
  <>
    <div>{countReference.current}</div>
    <button onClick={() => (countReference.current+=1)}>증가</button>
    <button onClick={() => console.log(countReference.current)}>표기</button>

  </>
  );
}

export default App;
