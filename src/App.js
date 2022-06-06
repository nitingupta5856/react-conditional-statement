
// conditional statement under return we will use ? :
import React ,{useState}from "react";

// use State=> useState is a hook which is used to manage state of react
// hooks are predefined function of react.
export default function Conditionalstate() {
  
  // conditional statement under return we will use ? :
  // ? true => do something
  // : false => do something
  let [name,setName]=useState('monday')
  let [state,setState]=useState('monday')
  function changeName(){
    // how to more than one state or change more than one state in a particular event
    setName('tuesday')
    setState(false)
  }
 
  // function reset(){
  //   setTest(0)
  // }
  return (
    <div>
     <button onClick={changeName}>changeName</button>
     {/*to write inline event ana manage state you have to write in arrow function*/}
    
     <button onClick={()=>{setName('monday')}}>reset</button>
     <div>{name}</div>
     {

       state
       ?<div style={{backgroundColor:"red"}}>when there is monday</div>:<div style={{backgroundColor:"blue"}}>when there is tuesday</div>
     }
    
    </div>
  );
}