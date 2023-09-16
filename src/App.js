import React,{useState} from "react";
import Inputuser from "./Component/Inputuser";
import Buttonc from "./Component/Buttonc.js";
import Show from "./Component/Show";


function App(){
    const [num1, setNum1]=useState(null)
    const [num2, setNum2]=useState(null)
    const [check,setCheck] =useState("")
    const [message,setMessage] =useState("")
    const [result, setResult]=useState(null)
      

    return (
        <div>
           <Inputuser  setNum1={setNum1}
           setNum2={setNum2} /> 
           <Buttonc  operation ="+" name="+" num1={num1} num2={num2} setCheck={setCheck} setResult={setResult} setMessage={setMessage} />
           <Buttonc  operation ="-" name="-" num1={num1} num2={num2} setCheck={setCheck} setResult={setResult} setMessage={setMessage}/>
           <Buttonc  operation ="*" name="*" num1={num1} num2={num2} setCheck={setCheck} setResult={setResult} setMessage={setMessage}/>
           <Buttonc  operation ="/" name="/" num1={num1} num2={num2} setCheck={setCheck} setResult={setResult} setMessage={setMessage}/>
           <Show check={check} result={result} message={message}/>
        </div>
    )
}
export default App