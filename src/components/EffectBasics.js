import React ,{useState,useEffect} from "react";

const EffectBasics =() =>{
    let[a,setA] = useState(0);
    let[b,setB] = useState(0);
    let [c,setC] =useState(0);

    useEffect(()=>{
         console.log("useEffect called");
         document.title =`A:${a} B:${b} C:${c}`;
         console.log("useEfefct ended");
    }, [a,b]);


    return(

        <div>
            <h1> A:{a} B:{b} C:{c}</h1>
            <button onClick={()=>setA(a+1)}>Increase A</button>
            <button onClick={()=>setA(a+1)}>Increase A</button>
            <button onClick={()=>setA(a+1)}>Increase A</button>
        </div>
    )

}

export default EffectBasics;