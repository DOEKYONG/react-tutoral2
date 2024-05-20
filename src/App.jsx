import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [valid,setValid] = useState(false);
  const ageReferecne = useRef(0);

  // 리랜더 일어나는지 콘솔로그
  console.log("리랜더");
  return (
  <>
  {/* ref.current 를 view 에 사용한느 멍청한짓은 하지말자 */}
  <input type="number" onChange={(e) => {
    e.target.value>=19?setValid(true):setValid(false);
  }}/>
  {valid ?<div>성년입니다.</div> : <div style={{color: 'red'}}>미성년입니다.</div>}
  </>
  );
}

export default App;
