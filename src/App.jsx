// import Child from "./components/Child"
import GrandChild from "./components/GrandChild"
import Parent from "./components/Parent"
// import UseContext from "./utils/UseDataCon"
// import UseHook from "./utils/UseHook"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  
 
  return <>
  
  
   <div className=" ">
   
   <Parent />
   {/* <Child /> */}
    <GrandChild />
   
     
   </div>
  
   
   
  
  </>
}

export default App
