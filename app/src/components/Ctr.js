import React, {useState} from "react";

 const Ctr=()=>{
   const [state, setState] =  useState({v: 0})

   const ctrHandler=()=>setState({v: state.v+10});
    return(<div>
        <div>{state.v}</div>
         <button onClick={ctrHandler}>INC</button>
    </div>)
};

export default Ctr;