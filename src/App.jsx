import { useRef, useState } from "react";
import "./App.css";

function App() {
  // const ageReferecne = useRef(0);
  const [age,setAge] = useState(0);

  // 리랜더 일어나는지 콘솔로그
  console.log("리랜더");
  return (
  <>
  <div>
    {age}
  </div>
  <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
  </>);
}

export default App;
