import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

export default function SignUp() {

  const {push} = useHistory();

  const initialState = {
    firstName: "",
    lastName: "",
    username:"",
    email: "",
    password: "",
  }
  //set state for new member signing up
  const [newMember, setNewMember] = useState(initialState);

  //temp. used to display response data
  const [members, setMembers] = useState([]);

  // state for whether our button should be disabled or not.
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // state for our errors
  const [errors, setErrors] = useState(initialState);

  // handle form submission


  const formSubmit = (e) => {
    e.preventDefault();
    
      
        console.log("New member", newMember);
        // update state with value from API
        setMembers([...members, newMember]);
        console.log("members", members);
        setNewMember(newMember);
        localStorage.setItem('token' , newMember.firstName)
        localStorage.setItem('Logged In', true )
        push("/user_account");
        

    
  };

  //validation schema
  const formSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "Name must be at least 2 characters."),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(2, "Name must be at least 2 characters."),
    username: yup
      .string()
      .min(6, 'Must container at least 6 characters')
      .required('Must create username'),
    email: yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: yup
      .string()
      .required("Please create a password")
      .min(8, "Password must be at least 8 characters."),
  });

  //cofirm password settings
    const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
   
    const confirmPasswordSchema = yup.object().shape({
      confirmPassword: yup.string().required("Please confirm your password")
    });
   
    const confirmPasswordChanges = e =>{
      e.persist();
      e.preventDefault();
      setConfirmPassword(e.target.value);

      yup
      .reach(confirmPasswordSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setConfirmPasswordError("");
      })
      .catch(err => setConfirmPasswordError(err.errors[0] ));
      console.log("user info", confirmPassword )


    }


  //Activate that button if everything is ok!
  useEffect(() => {
    formSchema.isValid(newMember).then((isValid) => {
      setButtonDisabled(!isValid);
    });
  }, [newMember]);

  //validate the changes
  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  // handle changes
  const inputChange = (e) => {
    e.persist();
    console.log("input changed", e.target.value);
    const newMemberData = {
      ...newMember,
      [e.target.name]: e.target.value,
    };
    validateChange(e);
    setNewMember(newMemberData);
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={formSubmit}>
        <label>
          First Name:<br/>
          <input
           //data-cy="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newMember.firstName}
            onChange={inputChange}
          />
        </label>{errors.firstName.length > 0 ? <p className="error">{errors.firstName}</p> : null}

        <label htmlFor="lastName">
          Last Name: <br/>
          <input
            // data-cy="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newMember.lastName}
            onChange={inputChange}
          />
        </label>{errors.lastName.length > 0 ? <p className = "error">{errors.lastName}</p>: null }

        <label htmlFor="email">
          Email:<br/>
          <input
            // data-cy="email"
            type="email"
            name="email"
            placeholder="email"
            value={newMember.email}
            onChange={inputChange}
          />
        </label>{errors.email.length > 0 ? <p className = "error">{errors.email}</p>: null }

        <label>
          Username:<br/>
          <input
           //data-cy="firstName"
            type="text"
            name="username"
            placeholder="username"
            value={newMember.username}
            onChange={inputChange}
          />
        </label>{errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}


        <label htmlFor="password">
          Password:<br/>
          <input
            // data-cy="password"
            type="password"
            name="password"
            placeholder="Password"
            value={newMember.password}
            onChange={inputChange}
          />
        </label>{errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}


        <label htmlFor="confirmPassword">
          Confirm Password:<br/>
          <input
            // data-cy="password"
            type="password"
            name="confirmPassword"
            placeholder="Re-type Password"
            value={confirmPassword}
            onChange={confirmPasswordChanges}
          />
        </label>{confirmPasswordError.length > 0 ? <p className="error">{confirmPasswordError}</p> : null}
                {passwordsDontMatch ? <p>The passwords you entered do not match</p> : null}

        <button data-cy="submit" disabled={buttonDisabled} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}