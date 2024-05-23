import { createContext, useContext, useState } from "react";
import "./App.css";


function Header() {
  const {theme,setTheme} = useContext(ThemeContext)
  return(
  <>
    <button onClick={()=>{
      if(theme==='blue') {
        setTheme('red')
      } else {
        setTheme('blue')
      }
    }}>테마변경</button>
  </>)
}

function ButtonComponent() {
return(
     <ThemeContext.Consumer>
        {({theme}) => {
          return <button style={{color:theme}} >로그인하기</button>
        }}
      </ThemeContext.Consumer> 
)

}

function PasswordInputComponent() {
  // 3. 컨슈머타입 유즈컨텍스트 타입
  const {theme} = useContext(ThemeContext);
  return <input type="password" style={{color:theme}} />
}

function IdInputComponent() {
  // 3. 컨슈머타입 유즈컨텍스트 타입
  const {theme} = useContext(ThemeContext);
  return <input type="text" style={{color:theme}} />
}


function LoginComponent() {
  return (
    <>
      <IdInputComponent  />
      <PasswordInputComponent  />
      <ButtonComponent  />
    </>
  )

}
const ThemeContext = createContext('red');


function ThemeContextProvider({children}) {
  const [theme,setTheme] = useState('red')
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
// 3. Consumer
function App() {
  return (
    <>
      <ThemeContextProvider>
        <Header/>
      <LoginComponent />
      </ThemeContextProvider>
    </>
  )
    
}

export default App;
