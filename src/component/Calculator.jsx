import React from "react";

const Calculator=(props)=>{
    const digit=()=>{
        const digital=[];
        for (let i = 0; i < 10; i++) {
            digital.push(<div className="div-el">
                <button className="el" name={i} onClick={operatorClick} >{i}</button>
            </div>)
        }
        return digital
    }

    const operatorClick=(e)=>{
        props.setResult(props.results.concat(e.target.name));
    }
    const clear=()=>{
        props.setResult("");
    }
    const destroy=()=>{
        props.setResult(props.results.slice(0,-1));
    }
    const calcul=()=>{
        try{
            props.setResult(eval(props.results.toString()));
        }catch(e){
            props.setResult("Error");
        }
       
    }
    return(
        <>
            <div className="container">
                <div className="result">
                    <input type="text" value={props.results || 0} />
                </div>
                <div className="digit">
                    <div className="digit-top">
                        <button onClick={clear}> Clear</button>
                        <button  onClick={destroy}>C</button>
                        <button name=")" onClick={operatorClick}>)</button>
                        <button name="+" onClick={operatorClick}>+</button>
                        <button name="-"onClick={operatorClick}>-</button>
                        <button name="/"onClick={operatorClick}>/</button>
                        <button name="*"onClick={operatorClick}>*</button>
                        <button name="%" onClick={operatorClick} >%</button>
                        <button name="(" onClick={operatorClick} >(</button>
                    </div>
                    <div className="el-digit">
                        {digit()}
                        <div className="div-el colorEqual"><button className="el" name="." onClick={operatorClick}>.</button></div>
                       <div className="div-el colorEqual"> <button className="el" onClick={calcul}>=</button></div>
                    </div>
                    

                </div>
            </div>
        </>
    )
}
export default Calculator;