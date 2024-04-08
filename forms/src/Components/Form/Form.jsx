import "./Form.css";
import Input from "../Input/Input";
import { useContext } from "react";
import { FormContext } from "../providers/FormContext";
import { useRef } from "react";

function Form(){

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const {formInput} = useContext(FormContext);

    const handleForSubmit = (event) => {
       event.preventDefault();
       emailRef.current.focus();
    }

    return(
        <div>
            New Form<br/>

            <form onSubmit={handleForSubmit} noValidate>
                <div className="wrapper email-input-wrapper">
                    <Input 
                        id="email-input"
                        type="email"
                        label="email"
                        inputRef={emailRef}
                    />
                </div>
                <div className="wrapper password-input-wrapper">
                    <Input 
                        id="password-input"
                        type="password"
                        label="password"
                        inputRef={passwordRef}
                    />
                </div>

                <input type="submit"/>
            </form>
        </div>
    );
}

export default Form;