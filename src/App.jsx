import { useState } from "react";
import "./App.css";

function ListItemComponent({children}) {
  return <li>{children}</li>
}

function UnorderedListComponent() {
  const arr = ['unordered 아이템 1','unordered 아이템 2','unordered 아이템 3']
  // const reactArr = arr.map((each) => {
  //   return <ListItemComponent>{each}</ListItemComponent>
  // });
  return (
    // <ul>
    //   <li>unordered 아이템 1</li>
    //   <li>unordered 아이템 2</li>
    //   <li>unordered 아이템 3</li>
    // </ul>
    <ul>
      {
        arr.map((each) => {
          return <ListItemComponent>{each}</ListItemComponent>
        })
      }
    </ul>

  );
}

function App() {

  return (
  <>
    <div>
      <ol>
      <ListItemComponent> ordered 아이템 1</ListItemComponent>
      <ListItemComponent> ordered 아이템 2</ListItemComponent>
      <ListItemComponent> ordered 아이템 3</ListItemComponent>
      </ol>
      <UnorderedListComponent/>
    </div>
  </>);
}

export default App;
