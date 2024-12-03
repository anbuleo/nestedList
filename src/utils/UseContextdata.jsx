import React, { useState } from 'react'

export const DataContext = React.createContext(null)

function UseContextdata({childern}) {

    let [data,setData] = useState("")



  return (<DataContext.Provider value={{data,setData}}>
  {childern}
</DataContext.Provider>)
   
  
}

export default UseContextdata