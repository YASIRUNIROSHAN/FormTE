import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";



const App = () => {
  const [values, setValues] = useState({
    regnumber: "",
    username: "",
    center: "",
    
    course: "",
    finalmark: "",
  });

  const inputs = [
    {
      id: 1,
      name: "regnumber",
      type: "text",
      placeholder: "Reg Number",
      // errorMessage:
      //   "Regnumber should be 3-16 characters and shouldn't include any special character!",
      label: "Registration Number",
      // pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "Name",
      // errorMessage: "It should be a valid email address!",
      label: "Username",
      required: true,
    },
    {
      id: 3,
      name: "center",
      type: "text",
      placeholder: "Center",
      label: "Center",
      required: true,
    },
    {
      id: 4,
      name: "course",
      type: "text",
      placeholder: "Course",
      // errorMessage:
      //   "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Course",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "finalmark",
      type: "number",
      placeholder: "Final Marks",
      
      // errorMessage: "Passwords don't match!",
      label: "Final Marks",
      // pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2>Student Data</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
