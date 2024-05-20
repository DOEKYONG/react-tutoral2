import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [visible,setVisible] = useState(false);
  return (
  <>
  <div>
  <>
  <input type="text" />
  <div>아이디 검증 에러 메시지</div>
  </> 
  <>
  <input type={visible ? 'text':'password'} />
  <button onClick={() => {setVisible((prev)=>!prev)}}>{visible?'안보임':'보임'}</button>
  <div>비번 검증 에러 메시지</div>
  </> 
  <div>로그인 버튼</div>
  </div>
  </>);
}

export default App;
