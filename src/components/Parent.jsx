import React, { useEffect, useState } from 'react'
import { IoIosFolderOpen ,IoMdArrowDropright } from "react-icons/io";
import UseHook from '../utils/UseHook';


function Parent() {
    let idChild=['a','b','c','d']
    let {childAdded,start}=UseHook()
    let [childData,setChildData] = useState([])
    let [childDataG,setChildDataG] = useState([])
    let [parentData,setParentData] = useState([
        "Application","Library","System","Users"
    ])
    let [active,setActive] = useState("")
    let [activeChild,setActiveChild] = useState("")
    let handleParentClick = async(s,e,i)=>{
        
        s.preventDefault()
        setActive(e)
       
        let id=parentData.indexOf(e)+1
        setChildDataG([])
       
        handleChangeData(e)
            document.getElementById(i+1).classList.add("active")
        //    await childAdded(e)
        
        for(let ind=1;ind<=parentData.length;ind++){
            if(ind != id &&  document.getElementById(ind).classList.contains("active")){
                document.getElementById(ind).classList.remove("active")
            }
        }
           
        
        
       
        
        
        // console.log(parentData.indexOf(e),active.length)
    }
    let handleChangeData =(data12)=>{
        if(data12==="Application"){
            
            setChildData(['Chrome','Lens','Avast','Edge'])
        }else if(data12==='Library'){
            setChildData(['Admin','User','Collection','Browser'])
        
        }else if(data12==='System'){
            setChildData(['Addins','Fonts','Media','Panther'])
        
        }else if(data12==='Users'){
            setChildData(['Adam','Ghost','Guest','Shared'])
        }
    }
    let handleChangeDataChild =(data12)=>{
        if(data12==="Chrome"){
            
            setChildDataG(['History','extenstion','Avast','Bookmark'])
        }else if(data12==='Lens'){
            setChildDataG(['Images','ScreenShot','JPG','Img'])
        
        }else if(data12==='Avast'){
            setChildDataG(['Error','Malfunction','Media','Bugs'])
        
        }else if(data12==='Edge'){
            setChildDataG(['History','extenstion','Avast','Bookmark'])
        }
        if(data12==="Admin"){
            
            setChildDataG(['Folder','Keys','Role','Active'])
        }else if(data12==='User'){
            setChildDataG(['Admin','User','Member','id'])
        
        }else if(data12==='Collection'){
            setChildDataG(['Id','Code','Data','Panther'])
        
        }else if(data12==='Browser'){
            setChildDataG(['Adam','Ghost','Guest','Shared'])
        }
        if(data12==="Addins"){
            
            setChildDataG(['Chrome','Lens','Avast','Edge'])
        }else if(data12==='Fonts'){
            setChildDataG(['Admin','User','Collection','Browser'])
        
        }else if(data12==='Media'){
            setChildDataG(['Addins','Fonts','Media','Panther'])
        
        }else if(data12==='Panther'){
            setChildDataG(['Adam','Ghost','Guest','Shared'])
        }
        if(data12==="Adam"){
            
            setChildDataG(['File','Lens','ABC','ABVC'])
        }else if(data12==='Ghost'){
            setChildDataG(['Admin','User','Member','Others'])
        
        }else if(data12==='Guest'){
            setChildDataG(['Addins','Unkown','Xyz','ABC'])
        
        }else if(data12==='Shared'){
            setChildDataG(['Data','Document','File','Collection'])
        }
    }
   let handleChildChilk = (s,e,i)=>{
    s.preventDefault()
    setActiveChild(e)
   
    let id=childData.indexOf(e)
   
    handleChangeDataChild(e)
        document.getElementById(idChild[i]).classList.add("active")
    //    await childAdded(e)
    
    for(let ind=0;ind<idChild.length;ind++){
        if(ind != id &&  document.getElementById(idChild[ind]).classList.contains("active")){
            document.getElementById(idChild[ind]).classList.remove("active")
        }
    }
       
   }
    
   
  return <div className="flex "><div className="w-1/3 h-screen bg-orange-100">
    <div className="">
            {parentData.map((e,i)=><div  key={i} id={i+1} onClick={(s)=>handleParentClick(s,e,i)} className='flex h-10 items-center p-2 justify-between hover:bg-blue-700 btn hover:text-orange-50'><div className='flex  items-center gap-5'><IoIosFolderOpen /><p>{e}</p></div><div className=''><IoMdArrowDropright /></div></div>)}
    </div>
    
  </div>
  {childData.length>0?<div className="w-1/3 h-screen bg-orange-100">
    <div className="">
            {childData.map((e,i)=><div onClick={(s)=>handleChildChilk(s,e,i)} key={i} id={idChild[i]} className='flex h-10 items-center p-2 justify-between hover:bg-blue-700 btn hover:text-orange-50'><div className='flex  items-center gap-5'><IoIosFolderOpen /><p>{e}</p></div><div className=''><IoMdArrowDropright /></div></div>)}
    </div>
  </div>:<div className="w-1/3">
  
  </div>}
  {childDataG.length>0?<div className="w-1/3 h-screen bg-orange-100">
    <div className="">
            {childDataG.map((e,i)=><div key={i} id={idChild[i]} className='flex h-10 items-center p-2 justify-between hover:bg-blue-700 btn hover:text-orange-50'><div className='flex  items-center gap-5'><IoIosFolderOpen /><p>{e}</p></div><div className=''></div></div>)}
    </div>
  </div>:<div className="w-1/3">
  
  </div>}
  </div>
}

export default Parent