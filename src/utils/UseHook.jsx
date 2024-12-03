import React, { useContext, useState } from 'react';



function UseHook() {
  
    let [parentBtn,setParentBtn] = useState("")
    let [childData,setChildData] = useState("")
   


    let childAdded = (e,i)=>{
       
    //   localStorage.setItem('parent',e)
        setParentBtn(e)
      
     
    //    setData(e)
        // console.log(parentBtn)
        // setParentBtn(e)
        console.log(parentBtn,'i')
       

    }
    let start = (e)=>{
        return e
    }


  
  
  
    return {childAdded,parentBtn,start}
}

export default UseHook