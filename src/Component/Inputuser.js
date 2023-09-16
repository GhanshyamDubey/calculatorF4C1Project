import React,{useState} from "react";

function Inputuser({setNum2,setNum1}){
    // 

 

    return (
        <div className="inputuser">
            <h1>React Calculator</h1>
            <input type="text" placeholder="Enter Number" onChange={(e)=>{setNum1(parseFloat(e.target.value))}}/>
            <input type="text" placeholder="Enter Number" onChange={(e)=>{setNum2(parseFloat(e.target.value))}}/>
        </div>
    )
}
export default Inputuser;