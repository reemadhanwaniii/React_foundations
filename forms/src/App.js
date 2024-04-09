import { useState } from "react";
import Form from "./Components/Form/Form";
import { FormContext } from "./Components/providers/FormContext";

function App() {
  const [formInput,setFormInput] = useState({email:'',password:''});
  return (
    <div className="App">
      <FormContext.Provider value={{formInput,setFormInput}}>
          <Form/>
      </FormContext.Provider>
      
    </div>
  );
}

export default App;
