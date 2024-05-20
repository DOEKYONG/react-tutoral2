import { useRef, useState } from "react";
import "./App.css";

function App() {
  const visibleReference = useRef();
  return (
  <>
  <div>
  <>
  <input type="text" />
  <div>아이디 검증 에러 메시지</div>
  </> 
  <>
  <input ref={visibleReference} type="password" />
  <button onClick={(e) => {
    if(visibleReference.current.type ==='password') {
      visibleReference.current.type ='text'
      e.target.innerText = '안보임'
    }else {
      visibleReference.current.type='password'
      e.target.innerText = '보임'
    }
    }}>보임</button>
  <div>비번 검증 에러 메시지</div>
  </> 
  <div>로그인 버튼</div>
  </div>
  </>);
}

export default App;
