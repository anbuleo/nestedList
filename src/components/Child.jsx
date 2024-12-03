import React, { useContext, useEffect, useRef, useState } from 'react'
import UseHook from '../utils/UseHook'
import { IoIosFolderOpen, IoMdArrowDropright } from 'react-icons/io'



function Child() {
    
    let {parentBtn} = UseHook()
    let [childData,setChildData] = useState([])
    // let ptd = useRef(parentBtn)
    let [tigger,setTigger] = useState("")
    // let a = localStorage.getItem('parent')
    setTigger(parentBtn)
  
    // console.log(a)
    
    

    let handleChangeData =(data12)=>{
        if(data12==="Application"){
            console.log('aa')
            setChildData(['Chrome','Lens','Avast','Edge'])
        }else if(data12==='Library'){
            setChildData(['Admin','User','Collection','Browser'])
        
        }else if(data12==='System'){
            setChildData(['Addins','Fonts','Media','Panther'])
        
        }else if(data12==='Users'){
            setChildData(['Adam','Ghost','Guest','Shared'])
        }
    }
    

  return <>
  {childData.length>0?<div className="w-1/3 h-screen bg-orange-100">
    <div className="">
            {childData.map((e,i)=><div  key={i} id={i+1} className='flex h-10 items-center p-2 justify-between hover:bg-blue-700 btn hover:text-orange-50'><div className='flex  items-center gap-5'><IoIosFolderOpen /><p>{e}</p></div><div className=''><IoMdArrowDropright /></div></div>)}
    </div>
  </div>:<div className="w-1/3">
  
  </div>}</>
}

export default Child