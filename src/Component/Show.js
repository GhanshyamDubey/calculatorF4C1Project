import React,{useState} from "react";



function Show({check ,message,result}){

    return (
        <div className="show">
             <h1 className={check.substr(0,2)}>{check}</h1>
            <p className={check.substr(0,4)}>{message}{check=="Error!"||result==null?"":<span> :{result.toFixed(2)}</span>}</p>
        </div>
    )
}
export default Show;