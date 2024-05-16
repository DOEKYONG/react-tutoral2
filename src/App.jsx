import { useState } from "react";
import "./App.css";




function ButtonComponent({className,onClick,children}) {
  return (
    <>
      <button 
            className={className}
            onClick={onClick}
          >
            {children}
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
      <ButtonComponent className={'increase-button'} onClick={() => {setCount((prev) => prev + 1)}} >
        증가
        </ButtonComponent>
        <ButtonComponent className={'decrease-button'} onClick={() => {setCount((prev) => prev - 1)}} >
        감소
        </ButtonComponent>      
    </div>
  </>);
}

export default App;
