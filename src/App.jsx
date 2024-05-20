import { useRef, useState } from "react";
import "./App.css";

function App() {
  const textReference = useRef();
  console.log("리랜더")

  return (
  <>
  <div ref={textReference}> Ref를 통한 DOM 조작  </div>
  <button onClick={()=> {
    textReference.current.className === 'not-modified'
    ?textReference.current.className='modified'
    :textReference.current.className='not-modified'
    
    // textReference.current.style.color==='black'?textReference.current.style.color = 'red':textReference.current.style.color='black';
  }}></button>
  </>);
}

export default App;
