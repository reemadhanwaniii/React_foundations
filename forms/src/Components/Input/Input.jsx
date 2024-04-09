import { useContext,useRef } from "react";
import { useState } from "react";
import { FormContext } from "../providers/FormContext";
import React from "react";
import './Input.css';
import { useImperativeHandle } from "react";
import { useEffect } from "react";

function Input({type,id,label,checkOnBlur, placeholder},ref)  {
   
    const {formInput,setFormInput} = useContext(FormContext); 
    const [text,setText] = useState("");
    const [isValid,setIsValid] = useState(true);
    const [shake, setShake] = useState(false);

    const localRef = useRef(null);


    useEffect(()=>{
        setIsValid(true);
        setShake(false);
    },[text]);

    useImperativeHandle(ref,()=>{
        return{
            focus: () => localRef.current.focus(),
            setInvalid: () => setIsValid(false),
            shake: () => setShake(true)
        }
    },[])

    return(
        <>
            <input
                className={`${(!isValid) ? "error-input" : ""} ${(shake) ? 'shake' : ''} `}
                type={type}
                id={id}
                ref={ref}
                value={text}
                placeholder={placeholder ? placeholder : ''}
                onBlur={checkOnBlur}
                onChange={(e)=>{
                    setText(e.target.value);
                    setFormInput({...formInput,[label]:e.target.value})}
                    }/>
                    <br/>
            <span>  { (!isValid) ? `${label} is invalid` : ''}</span>
        </>
    )
}

export default React.forwardRef(Input);