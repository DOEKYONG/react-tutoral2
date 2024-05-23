import { useState } from "react";
import "./App.css";

function usePersonSelect(initialvalue) {
  const [person, setPerson] = useState(initialvalue)
 
  return [person,
          () =>{setPerson((perv)=>perv +1 )},
          () =>{setPerson((prev)=> prev-1 )}
        ];
}

function App() {
  const [adults, plusAdults, minusAdults] = usePersonSelect(0);
  const [kids,plusKids,minusKids] = usePersonSelect(0);
  const [babies,plusBabies,minusBabies] =usePersonSelect(0);
  const [pets,pulsPets,minusPets] = usePersonSelect(0);

  return (
  <>
    <div>성인
      <button onClick={ plusAdults}>+</button>{adults}<button onClick={ minusAdults}>-</button>
    </div>
    <div>어린이
    <button onClick={ plusKids}>+</button>{kids}<button onClick={ minusKids} >-</button>
      </div>    
    <div>유아
    <button onClick={ plusBabies}>+</button>{babies}<button onClick={minusBabies}>-</button>
    </div>
    <div>반려동물
    <button onClick={ pulsPets}>+</button>{pets}<button onClick={ minusPets} >-</button>
    </div>


  </>);
}

export default App;
