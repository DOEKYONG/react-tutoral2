import { useRef, useState } from "react";
import "./App.css";

function App() {
  const ageReferecne = useRef(0);
  // const [age,setAge] = useState(0);

  // 리랜더 일어나는지 콘솔로그
  console.log("리랜더");
  return (
  <>
  {/* ref.current 를 view 에 사용한느 멍청한짓은 하지말자 */}
  <div>
    {ageReferecne.current}
  </div>
  <input type="number"
    ref={ageReferecne} 
  // value={age} onChange={(e) => {ageReferecne.current = e.target.value}} 
  />
  <button onClick={ () => { console.log('지금 값은 : ', ageReferecne.current.value)}}>표기</button>
  </>
  );
}

export default App;
