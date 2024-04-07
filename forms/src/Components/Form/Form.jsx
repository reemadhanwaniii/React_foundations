import { useState } from "react";
import "./Form.css";
import validatePassword from "../../helper/passwordValidator";
import validateEmail from "../../helper/emailValidator";
import { useRef } from "react";
import { useEffect } from "react";
import Input from "../Input/Input";

function Form(){

    {/*const emailRef = useRef(null);
    const passwordRef = useRef(null); 

    const exampleRef = useRef(0);
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log(exampleRef);
    },[count]);

    const [formValues,setFormValues] = useState({
        email:"",
        password:""
    })

    const handleValidatePassword = () =>{
        const password = formValues.password;

        if(!validatePassword(password)){
            passwordRef.current.focus();
            console.log("Invalid password");
        }
    }

    const handleValidateEmail = () => {
        const email = formValues.email;

        if(!validateEmail(email)){
            emailRef.current.focus();
            console.log("Invalid Email");
        }
    }*/}

    const handleForSubmit = (event) => {
       event.preventDefault();
      // handleValidateEmail();
       //handleValidatePassword();
    }

    return(
        <div>
            New Form<br/>
{/*
            Count : {count}<br/>
            ExampleRed : {exampleRef.current}<br/>

            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>exampleRef.current++}>Update Ref</button>
*/}
            <form onSubmit={handleForSubmit}>
                <div className="wrapper email-input-wrapper">
                    {/*<input 
                        id="email-input"
                        type="text"
                        value={formValues.email}
                        ref={emailRef}
    onChange={(event)=>setFormValues({...formValues,email: event.target.value})}/>}*/}
                    <Input 
                        id="email-input"
                        type="text"
                    />
                </div>
                <div className="wrapper password-input-wrapper">
                    {/*<input 
                        id="password-input"
                        type="password" 
                        value={formValues.password}
                        ref={passwordRef}
                        onChange={(event)=>setFormValues({...formValues,password: event.target.value})}
/>}*/}
                    <Input 
                        id="password-input"
                        type="password"/>
                </div>

                <input type="submit"/>
            </form>
        </div>
    );
}

export default Form;