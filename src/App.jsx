import { useState } from "react";
import "./App.css";

function ListItemComponent({item : person, children, setPeople}) {
  const [activated,setActivated] = useState(false);
  const [changedDescription,setChangedDescription] = useState(person.desc); 
  return (
    <li onClick={ () => {setActivated(!activated)}}>
      <div>{children}</div>
      <div>{person.age}</div>
      { activated ? (
      <>
      <input type='text' 
        value={changedDescription}
        onChange={(e) => {
          const typed = e.target.value;
          setChangedDescription(typed)
        }}
      />
      <button onClick={() => {
        setPeople((prev) => {
          return prev.map((each) => {
            return person.name === each.name?{...each, desc:changedDescription}:each
          })
        })
        console.log('저장')
      }}>
        확인 
      </button>
      <button onClick={() => {
        console.log('취소')
        setChangedDescription(person.desc);
      }}>
        취소 
      </button>
      </>
    )
      : <div>{person.desc}</div>}
    </li>)
}

function UnorderedListComponent({items,setPeople}) {
  return (
    <ul>
      {
        items.map((each) => {
          return <ListItemComponent item={each} setPeople={setPeople}>{each.name}</ListItemComponent>
        })
      }
    </ul>

  );
}

function App() {
  
  const [people,setPeople] = useState( [
    {name :'Aaron',age:10,desc:'안녕'},
    {name :'Baron',age:30,desc:'하이'},
    {name :'Caron',age:22,desc:'바보'},
    {name :'Daron',age:17,desc:'바이'}
    ])

  return (
  <>
    <div>
      {/* <ListItemComponent/> */}
      <UnorderedListComponent items={people} setPeople={setPeople}/>
    </div>
  </>);
}

export default App;
