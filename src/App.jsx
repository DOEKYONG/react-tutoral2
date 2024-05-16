import { useState } from "react";
import "./App.css";

function App() {
  const [level, setLevel] = useState(1);
  const [title,setTitle] = useState('노비스');

  // const upgradeTitle1 = () => {
  //   console.log("이전상태", level)
  //   setLevel((prev) => prev +1)
  //   console.log("이후상태", level)
  //   if(level >= 15) {
  //     setTitle('1차 전직')
  //   }
  //   if(level >= 30) {
  //     setTitle('2차 전직')
  //   }
  // }

  const upgradeTitle1 = () => {
    setLevel((prev) => {
      const nextLevel = prev+1
    if(nextLevel >= 15) {
      setTitle('1차 전직')
    }
    if(nextLevel >= 30) {
      setTitle('2차 전직')
    }
    return nextLevel;
    })
    
  }

  const upgradeTitle2 = () => {
    const nextLevel = level+1
    setLevel(nextLevel)
    if(nextLevel >= 15) {
      setTitle('1차 전직')
    }
    if(nextLevel >= 30) {
      setTitle('2차 전직')
    }
    return nextLevel;
    }
    

  return (
  <>
    <div style={{marginBottom: 10}}>{level}</div>
    <div style={{marginBottom: 10}}>{title}</div>
    <div>
      <button onClick={upgradeTitle2}> 레벨업</button>
    </div>   

  </>);
}

export default App;
