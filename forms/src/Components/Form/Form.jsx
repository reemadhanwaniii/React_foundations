import "./Form.css";
import Input from "../Input/Input";
import { useContext } from "react";
import { FormContext } from "../providers/FormContext";
import { useRef } from "react";
import emailValidator from "../../helper/emailValidator";
import passwordValidator from "../../helper/passwordValidator";
import { useState } from "react";

function Form(){

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const usernameRef = useRef(null);
    const addressRef = useRef(null);


    const {formInput} = useContext(FormContext);

    const [step,setStep] = useState(0);


    const handleForSubmit = (event) => {
       event.preventDefault();
      // emailRef.current.focus();
      handleInvalidEmail();
      handleInvalidPassword();
    }

    const handleInvalidEmail = () =>{
        if(!emailValidator(formInput.email)){
            emailRef.current.setInvalid();
            emailRef.current.shake();
       }
    }

    const handleInvalidPassword = () => {
        if(!passwordValidator(formInput.password)){
            passwordRef.current.setInvalid();
            passwordRef.current.shake();
       }
    }


    if(step == 1){
        return(
            <div>
                New Form<br/>
    
                <form onSubmit={handleForSubmit} noValidate>
                    <div className="wrapper email-input-wrapper">
                        <Input 
                            id="email-input"
                            type="email"
                            label="email"
                            ref={emailRef}
                            checkOnBlur={()=>handleInvalidEmail()}
                        />
                    </div>
                    <div className="wrapper password-input-wrapper">
                        <Input 
                            id="password-input"
                            type="password"
                            label="password"
                            ref={passwordRef}
                            checkOnBlur={()=>handleInvalidPassword()}
                        />
                    </div>
    
                    <input type="submit"/>
                </form>
            </div>
        );
    }else if(step == 2){
        return (
            <div>
                
                <form onSubmit={handleFormSubmit} noValidate>
                    <div className="wrapper email-input-wrapper">
                        <Input 
                            id="username-input"
                            type="text"
                            label="username"
                            placeholder="username"
                            ref={usernameRef}
                            key={3}
                            checkOnBlur={() => console.log("empty")}
                        />
                    </div>
    
                    <input id="submit-input" type="submit" />
                </form>
                <button onClick={() => {
                    setStep(step+1)
                }}>
                    Next
                </button>
                <button onClick={() => {
                    setStep(step-1)
                }}>
                    Prev
                </button>
            </div>
        )
    }
    else if(step == 3) {
        return (
            <div>
                
                <form onSubmit={handleFormSubmit} noValidate>
                    <div className="wrapper password-input-wrapper">
                        <Input 
                            id="address-input"
                            type="text"
                            label="address"
                            placeholder="address"
                            ref={addressRef}
                            key={4}
                            checkOnBlur={handleInvalidPassword}
                        />
                    </div>
    
                    <input id="submit-input" type="submit" />
                </form>

                <button onClick={() => {
                    setStep(step-1)
                }}>
                    prev
                </button>

                <input id="submit-input" type="submit" />
            </div>
        )
    }

   
}

export default Form;