import React,{useState,useEffect} from "react";



function Buttonc({num1,num2,setCheck,setMessage,setResult,operation,name}){
    console.log(operation)
  
    function validation(){
        if(!num1){
           setCheck("Error!");
           setMessage("Num1 cannot Be Empty")
        }
        else if(!num2){
            setCheck("Error!");
            setMessage("Num2 cannot Be Empty")
        }
        else{
            setCheck("Success!");
            setMessage("Result-");
            
           
            }

        performOperation(operation)
        }

        function performOperation(val){
            if(val==="+"){
                setResult("")
             setResult(num1 +num2)
            }
            else if(val==="-"){
                setResult("")
               setResult(num1 -num2)
            }
            else if(val==="*"){
                setResult("")
                 setResult(num1*num2)
            }
            else if(val==="/"){
                setResult("")
            setResult(num1/num2)
            }
        }
   
    return (
        <span>
           <button  onClick={validation} >{name}</button>
        </span>
    )
}
export default Buttonc;